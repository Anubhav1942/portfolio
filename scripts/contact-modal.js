/**
 * contact-modal.js
 * Contact form powered by EmailJS.
 * Loads the EmailJS SDK dynamically — no extra <script> tags needed in HTML.
 */
(function () {
  'use strict';

  var SERVICE_ID  = 'service_k6en379';
  var TEMPLATE_ID = 'template_xtti25j';
  var PUBLIC_KEY  = '9pRMeqcwMzHUkNN85';

  var modalHTML = [
    '<div class="contact-modal-overlay" id="contactOverlay" aria-hidden="true"></div>',
    '<div class="contact-modal" id="contactModal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">',
    '  <div class="contact-modal__header">',
    '    <div>',
    '      <h2 class="contact-modal__title" id="contactModalTitle">Get in touch</h2>',
    '      <p class="contact-modal__subtitle">I will get in touch shortly.</p>',
    '    </div>',
    '    <button class="contact-modal__close" id="contactClose" aria-label="Close contact form">&#x2715;</button>',
    '  </div>',
    '  <form class="contact-modal__form" id="contactForm" novalidate>',
    '    <div class="contact-modal__field">',
    '      <label class="contact-modal__label" for="contactName">Your name</label>',
    '      <input class="contact-modal__input" type="text" id="contactName" placeholder="Ada Lovelace" autocomplete="name" required />',
    '    </div>',
    '    <div class="contact-modal__field">',
    '      <label class="contact-modal__label" for="contactEmail">Your email</label>',
    '      <input class="contact-modal__input" type="email" id="contactEmail" placeholder="ada@example.com" autocomplete="email" required />',
    '    </div>',
    '    <div class="contact-modal__field">',
    '      <label class="contact-modal__label" for="contactMessage">Message</label>',
    '      <textarea class="contact-modal__textarea" id="contactMessage" placeholder="Tell me what you\'re building..." required></textarea>',
    '    </div>',
    '    <p class="contact-modal__feedback" id="contactFeedback" aria-live="polite"></p>',
    '    <div class="contact-modal__actions">',
    '      <button type="button" class="contact-modal__cancel" id="contactCancel">Cancel</button>',
    '      <button type="submit" class="contact-modal__submit" id="contactSubmit">Send message</button>',
    '    </div>',
    '  </form>',
    '</div>'
  ].join('\n');

  function loadEmailJS(callback) {
    if (window.emailjs) { callback(); return; }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = function () {
      window.emailjs.init({ publicKey: PUBLIC_KEY });
      callback();
    };
    s.onerror = function () {
      console.error('EmailJS SDK failed to load.');
    };
    document.head.appendChild(s);
  }

  function init() {
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    var overlay   = document.getElementById('contactOverlay');
    var modal     = document.getElementById('contactModal');
    var closeBtn  = document.getElementById('contactClose');
    var cancelBtn = document.getElementById('contactCancel');
    var form      = document.getElementById('contactForm');
    var submitBtn = document.getElementById('contactSubmit');
    var feedback  = document.getElementById('contactFeedback');

    // Pre-load the SDK so it is ready when the user submits
    loadEmailJS(function () {});

    function open() {
      overlay.classList.add('open');
      modal.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      setTimeout(function () {
        var f = document.getElementById('contactName');
        if (f) f.focus();
      }, 50);
    }

    function close() {
      overlay.classList.remove('open');
      modal.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    window.openContactModal  = open;
    window.closeContactModal = close;

    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    cancelBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name    = (document.getElementById('contactName').value  || '').trim();
      var email   = (document.getElementById('contactEmail').value || '').trim();
      var message = (document.getElementById('contactMessage').value || '').trim();

      if (!name || !email || !message) {
        setFeedback('Please fill in all fields.', 'error');
        return;
      }

      setSubmitting(true);
      setFeedback('', '');

      loadEmailJS(function () {
        // NOTE: parameter keys must match the EmailJS template variables
        // exactly. The template uses form_name / form_email (NOT from_name /
        // from_email — a previous typo here silently dropped both fields).
        window.emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          name:       name,
          form_name:  name,
          form_email: email,
          message:    message,
          title:      'New message from anubhavp.in contact form',
          time:       new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
        })
        .then(function () {
          setFeedback('Message sent. I will get back to you shortly.', 'success');
          form.reset();
          setTimeout(close, 2200);
        })
        .catch(function (err) {
          console.error('EmailJS error:', err);
          setFeedback('Something went wrong. Try emailing me directly at pandeyanubhav229@gmail.com', 'error');
        })
        .finally(function () {
          setSubmitting(false);
        });
      });
    });

    function setSubmitting(loading) {
      submitBtn.disabled = loading;
      submitBtn.textContent = loading ? 'Sending...' : 'Send message';
    }

    function setFeedback(text, type) {
      feedback.textContent = text;
      feedback.className = 'contact-modal__feedback' + (type ? ' contact-modal__feedback--' + type : '');
    }

    // Delegate clicks for any .js-contact-open trigger
    document.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.js-contact-open')) open();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
