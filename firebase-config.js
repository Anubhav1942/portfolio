/**
 * firebase-config.js — shared across all portfolio pages
 * Exposes window.loadContent() and window.saveContent(C)
 * Must be loaded AFTER the Firebase compat SDK scripts.
 */
(function () {
  var FB_CONFIG = {
    apiKey: "AIzaSyD99ryw4vzBl7-krwLmosSlfoXXThHwK6s",
    authDomain: "portfolio2anubhavp.firebaseapp.com",
    projectId: "portfolio2anubhavp",
    storageBucket: "portfolio2anubhavp.firebasestorage.app",
    messagingSenderId: "1050224641873",
    appId: "1:1050224641873:web:a4675b9465e85cf978b570"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(FB_CONFIG);
  }

  var db = firebase.firestore();
  var CONTENT_DOC = db.collection('portfolio').doc('content');

  /**
   * Load content: Firestore first, then localStorage cache, then content.js fallback.
   * Returns a Promise<Object>.
   */
  window.loadContent = function () {
    return CONTENT_DOC.get().then(function (doc) {
      if (doc.exists && doc.data() && doc.data().data) {
        var json = doc.data().data;
        // Cache locally so the fallback chain is warm
        try { localStorage.setItem('portfolio_content_v1', json); } catch (e) {}
        return JSON.parse(json);
      }
      throw new Error('empty');
    }).catch(function () {
      // Firestore unavailable or empty — use local cache or static file
      var stored;
      try { stored = localStorage.getItem('portfolio_content_v1'); } catch (e) {}
      return stored ? JSON.parse(stored) : (window.CONTENT || {});
    });
  };

  /**
   * Save content to Firestore (and warm the local cache).
   * Returns a Promise.
   */
  window.saveContent = function (C) {
    var json = JSON.stringify(C);
    try { localStorage.setItem('portfolio_content_v1', json); } catch (e) {}
    return CONTENT_DOC.set({
      data: json,
      updatedAt: new Date().toISOString()
    });
  };
})();
