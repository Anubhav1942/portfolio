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

  /* ── Environment detection ── */
  var _host  = window.location.hostname;
  var IS_DEV = (_host === 'localhost' || _host === '127.0.0.1' || _host === '');
  // Expose so admin UI can show a DEV badge
  window.IS_DEV_ENV = IS_DEV;

  /* ── Firestore helpers ── */
  // DEV  → users/{uid}/portfolio/content_dev   (never touches live data)
  // PROD → users/{uid}/portfolio/content
  function userContentRef(uid) {
    var docName = IS_DEV ? 'content_dev' : 'content';
    return window.fbDb.collection('users').doc(uid).collection('portfolio').doc(docName);
  }

  /* ── Public content: resolve uid from query param → hostname → fallback ── */
  function loadPublicContent() {
    var hostname  = window.location.hostname;
    var isFileUrl = (window.location.protocol === 'file:');
    // Treat only actual local dev servers as "local" — file:// should still try Firestore
    var isLocal   = !isFileUrl && (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '');

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

    // 2. Dev environment (localhost) — skip domain lookup, use localStorage or content.js
    if (isLocal) {
      return Promise.resolve(null);
    }

    // 2b. file:// — no domain to look up, go straight to legacy Firestore path
    if (isFileUrl) {
      console.log('[portfolio] file:// detected — skipping domain lookup, trying legacy path');
      return window.fbDb.collection('portfolio').doc('content').get()
        .then(function (doc) {
          if (doc.exists && doc.data() && doc.data().data) {
            console.log('[portfolio] Content loaded from legacy path (file:// mode)');
            return JSON.parse(doc.data().data);
          }
          return null;
        })
        .catch(function () { return null; });
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

    var lsKey = IS_DEV ? 'portfolio_content_dev_v1' : 'portfolio_content_v1';
    return docPromise.then(function (content) {
      if (content) {
        try { localStorage.setItem(lsKey, JSON.stringify(content)); } catch (e) {}
        return content;
      }
      // Fallback chain: localStorage → content.js
      var stored;
      try { stored = localStorage.getItem(lsKey); } catch (e) {}
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
    var lsKey   = IS_DEV ? 'portfolio_content_dev_v1' : 'portfolio_content_v1';
    try { localStorage.setItem(lsKey, json); } catch (e) {}

    if (IS_DEV) {
      // Dev: write ONLY to content_dev — never touches live data
      return userContentRef(uid).set(payload);
    }
    // Production: write to per-user doc + legacy shared path
    return Promise.all([
      userContentRef(uid).set(payload),
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
   * uploadImage(file, uid, folder, onProgress)
   *
   * Uploads a File object to ImgBB and returns a Promise resolving to the direct image URL.
   * onProgress is called with a percentage (0-100) during upload.
   */
  window.uploadImage = function (file, uid, folder, onProgress) {
    var IMGBB_KEY = '410076e1afb9ee1d1edb428ae07ac617';

    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onerror = function () { reject(new Error('Failed to read file')); };
      reader.onload = function (e) {
        // Strip the data URL prefix — ImgBB wants the raw base64 string
        var base64 = e.target.result.replace(/^data:[^;]+;base64,/, '');

        var formData = new FormData();
        formData.append('key', IMGBB_KEY);
        formData.append('image', base64);
        formData.append('name', Date.now() + '_' + file.name);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgbb.com/1/upload');

        if (typeof onProgress === 'function') {
          xhr.upload.onprogress = function (ev) {
            if (ev.lengthComputable) onProgress(Math.round((ev.loaded / ev.total) * 100));
          };
        }

        xhr.onload = function () {
          try {
            var res = JSON.parse(xhr.responseText);
            if (res.success && res.data && res.data.url) {
              resolve(res.data.url);
            } else {
              reject(new Error(res.error && res.error.message || 'ImgBB upload failed'));
            }
          } catch (err) {
            reject(new Error('ImgBB response parse error'));
          }
        };

        xhr.onerror = function () { reject(new Error('Network error during upload')); };
        xhr.send(formData);
      };
      reader.readAsDataURL(file);
    });
  };
})();
