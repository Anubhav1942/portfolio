/**
 * firebase-config.js — shared across all portfolio pages
 *
 * Exposes:
 *   window.fbDb                         — Firestore instance
 *   window.fbAuth                       — Firebase Auth instance
 *   window.fbStorage                    — Firebase Storage instance (if SDK loaded)
 *   window.loadContent(uid)             — load content for admin (uid) or public (domain-based)
 *   window.saveContent(C, uid)          — save content for authenticated user
 *   window.registerDomain(domain, uid)  — map a custom domain to a user
 *   window.uploadImage(file, uid, folder) — upload image to Storage, returns download URL
 */
(function () {
  var FB_CONFIG = {
    apiKey:            'AIzaSyD99ryw4vzBl7-krwLmosSlfoXXThHwK6s',
    authDomain:        'portfolio2anubhavp.firebaseapp.com',
    projectId:         'portfolio2anubhavp',
    storageBucket:     'portfolio2anubhavp.firebasestorage.app',
    messagingSenderId: '1050224641873',
    appId:             '1:1050224641873:web:a4675b9465e85cf978b570'
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(FB_CONFIG);
  }

  window.fbDb      = firebase.firestore();
  window.fbAuth    = (typeof firebase.auth === 'function') ? firebase.auth() : null;
  window.fbStorage = (typeof firebase.storage === 'function') ? firebase.storage() : null;

  /* ── Firestore helpers ── */
  function userContentRef(uid) {
    return window.fbDb.collection('users').doc(uid).collection('portfolio').doc('content');
  }

  /* ── Public content: resolve uid from query param → hostname → fallback ── */
  function loadPublicContent() {
    var hostname = window.location.hostname;
    var isLocal  = (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '');

    // 1. Check for ?uid= query parameter — used for default user portfolio URLs
    var params   = new URLSearchParams(window.location.search);
    var uidParam = params.get('uid');
    if (uidParam) {
      return userContentRef(uidParam).get()
        .then(function (doc) {
          if (doc.exists && doc.data() && doc.data().data) {
            console.log('[portfolio] Content loaded via ?uid= param for', uidParam);
            return JSON.parse(doc.data().data);
          }
          return null;
        })
        .catch(function () { return null; });
    }

    // 2. Dev environment — skip domain lookup, use localStorage or content.js
    if (isLocal) {
      return Promise.resolve(null);
    }

    // 3. Custom domain → look up domains/{hostname} → uid → content
    return window.fbDb.collection('domains').doc(hostname).get()
      .then(function (domainDoc) {
        if (!domainDoc.exists || !domainDoc.data().uid) throw new Error('no-domain-mapping');
        var mappedUid = domainDoc.data().uid;
        return userContentRef(mappedUid).get();
      })
      .then(function (doc) {
        if (doc.exists && doc.data() && doc.data().data) {
          console.log('[portfolio] Content loaded via domain mapping for', hostname);
          return JSON.parse(doc.data().data);
        }
        throw new Error('user-content-empty');
      })
      .catch(function (err) {
        console.log('[portfolio] Domain lookup failed (' + (err.message || err) + '), trying legacy path');
        // 4. Backward-compat: fall back to the old shared portfolio/content document
        //    (used by anubhavp.in until domain mapping is fully in place)
        return window.fbDb.collection('portfolio').doc('content').get()
          .then(function (doc) {
            if (doc.exists && doc.data() && doc.data().data) {
              console.log('[portfolio] Content loaded from legacy portfolio/content path');
              return JSON.parse(doc.data().data);
            }
            console.log('[portfolio] No content found in Firestore — will use content.js fallback');
            return null;
          })
          .catch(function () { return null; });
      });
  }

  /**
   * loadContent(uid?)
   *
   * With uid  → admin panel: load from users/{uid}/portfolio/content
   * Without   → public portfolio: resolve from hostname → domain → uid → content
   *
   * Falls back to: localStorage cache → window.CONTENT (content.js)
   */
  window.loadContent = function (uid) {
    var docPromise;

    if (uid) {
      docPromise = userContentRef(uid).get()
        .then(function (doc) {
          if (doc.exists && doc.data() && doc.data().data) {
            return JSON.parse(doc.data().data);
          }
          return null;
        })
        .catch(function () { return null; });
    } else {
      docPromise = loadPublicContent();
    }

    return docPromise.then(function (content) {
      if (content) {
        // Warm local cache
        try { localStorage.setItem('portfolio_content_v1', JSON.stringify(content)); } catch (e) {}
        return content;
      }
      // Fallback chain: localStorage → content.js
      var stored;
      try { stored = localStorage.getItem('portfolio_content_v1'); } catch (e) {}
      return stored ? JSON.parse(stored) : (window.CONTENT || {});
    });
  };

  /**
   * saveContent(C, uid)
   *
   * Saves to users/{uid}/portfolio/content.
   * Also keeps portfolio/content in sync (backward compat for public pages
   * not yet using domain-based routing).
   */
  window.saveContent = function (C, uid) {
    if (!uid) return Promise.reject(new Error('uid required'));
    var json    = JSON.stringify(C);
    var payload = { data: json, updatedAt: new Date().toISOString() };
    try { localStorage.setItem('portfolio_content_v1', json); } catch (e) {}
    return Promise.all([
      userContentRef(uid).set(payload),
      // Keep old path in sync while public pages haven't migrated to domain routing yet
      window.fbDb.collection('portfolio').doc('content').set(payload)
    ]);
  };

  /**
   * registerDomain(domain, uid)
   * Maps a custom domain string (e.g. "anubhavp.in") to a user ID in Firestore.
   */
  window.registerDomain = function (domain, uid) {
    return window.fbDb.collection('domains').doc(domain).set({
      uid:            uid,
      registeredAt:   new Date().toISOString()
    });
  };

  /**
   * uploadImage(file, uid, folder)
   *
   * Uploads a File object to Firebase Storage under users/{uid}/images/{folder}/{timestamp}_{name}.
   * Returns a Promise that resolves to the public download URL string.
   * Requires firebase-storage-compat.js to be loaded before firebase-config.js.
   */
  window.uploadImage = function (file, uid, folder, onProgress) {
    if (!window.fbStorage) {
      return Promise.reject(new Error('Firebase Storage SDK not loaded.'));
    }
    if (!uid) return Promise.reject(new Error('uid required'));

    var ext       = file.name.split('.').pop();
    var safeName  = Date.now() + '_' + Math.random().toString(36).slice(2) + '.' + ext;
    var path      = 'users/' + uid + '/images/' + (folder || 'misc') + '/' + safeName;
    var ref       = window.fbStorage.ref(path);
    var task      = ref.put(file);

    return new Promise(function (resolve, reject) {
      task.on('state_changed',
        function (snap) {
          var pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
          if (typeof onProgress === 'function') onProgress(pct);
        },
        reject,
        function () {
          task.snapshot.ref.getDownloadURL().then(resolve).catch(reject);
        }
      );
    });
  };
})();
