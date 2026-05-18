/* ============================================================
   ANUBHAV PANDEY — PORTFOLIO
   main.js — Behaviors + GA4 Analytics Layer
   ============================================================ */


/* ============================================================
   NAV: Scroll state + mobile toggle
   ============================================================ */

const nav       = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navLinks  = document.querySelector('.nav__links');

// Add .scrolled class after 20px scroll for backdrop blur
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Mobile menu open/close
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Mark active nav link based on current path
(function markActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '/' && path.startsWith(href)) {
      link.classList.add('active');
    } else if (href === '/' && path === '/') {
      link.classList.add('active');
    }
  });
})();


/* ============================================================
   GOOGLE ANALYTICS 4 — Event tracking helpers
   ============================================================

   GA4 Measurement ID: G-XXXXXXXXXX
   IMPORTANT: Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
   in the <head> script tag of each HTML file.

   Events tracked:
   - resume_download        : PDF download clicked (with source location)
   - case_study_view        : Case study card or link clicked
   - blog_post_click        : Blog post link clicked
   - contact_click          : Email / LinkedIn / contact link clicked
   - external_link_click    : Any outbound link
   - scroll_depth           : 25 / 50 / 75 / 100% milestones per page
   - section_visible        : When a major section enters the viewport
   ============================================================ */

function trackEvent(name, params = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', name, {
      ...params,
      page_path: window.location.pathname,
    });
  }
}


/* ============================================================
   RESUME DOWNLOAD
   Add data-track="resume-download" data-track-source="hero|nav|footer"
   to any resume download anchor.
   ============================================================ */

document.querySelectorAll('[data-track="resume-download"]').forEach(el => {
  el.addEventListener('click', () => {
    trackEvent('resume_download', {
      source: el.dataset.trackSource || 'unknown',
    });
  });
});


/* ============================================================
   CASE STUDY CLICKS
   Add data-track="case-study" data-track-name="secureshare"
   to project card links.
   ============================================================ */

document.querySelectorAll('[data-track="case-study"]').forEach(el => {
  el.addEventListener('click', () => {
    trackEvent('case_study_view', {
      case_study: el.dataset.trackName || 'unknown',
    });
  });
});


/* ============================================================
   BLOG POST CLICKS
   Add data-track="blog-post" data-track-name="post-title"
   ============================================================ */

document.querySelectorAll('[data-track="blog-post"]').forEach(el => {
  el.addEventListener('click', () => {
    trackEvent('blog_post_click', {
      post_title: el.dataset.trackName || 'unknown',
    });
  });
});


/* ============================================================
   CONTACT + SOCIAL CLICKS
   Add data-track="contact" data-track-name="email|linkedin|dribbble"
   ============================================================ */

document.querySelectorAll('[data-track="contact"]').forEach(el => {
  el.addEventListener('click', () => {
    trackEvent('contact_click', {
      channel: el.dataset.trackName || 'unknown',
    });
  });
});


/* ============================================================
   EXTERNAL LINK CLICKS
   Add data-track="external" data-track-name="destination-label"
   ============================================================ */

document.querySelectorAll('[data-track="external"]').forEach(el => {
  el.addEventListener('click', () => {
    trackEvent('external_link_click', {
      destination: el.dataset.trackName || el.href || 'unknown',
    });
  });
});


/* ============================================================
   SCROLL DEPTH TRACKING
   Fires once per session per depth milestone.
   Tracks: 25%, 50%, 75%, 100%
   ============================================================ */

(function initScrollDepth() {
  const milestones  = [25, 50, 75, 100];
  const triggered   = new Set();

  function getScrollPct() {
    const scrolled   = window.scrollY + window.innerHeight;
    const totalH     = document.documentElement.scrollHeight;
    return Math.round((scrolled / totalH) * 100);
  }

  window.addEventListener('scroll', () => {
    const pct = getScrollPct();
    milestones.forEach(m => {
      if (pct >= m && !triggered.has(m)) {
        triggered.add(m);
        trackEvent('scroll_depth', {
          depth_pct: m,
          page: window.location.pathname,
        });
      }
    });
  }, { passive: true });
})();


/* ============================================================
   SECTION VISIBILITY TRACKING (Intersection Observer)
   Fires when a section becomes 40% visible.
   Useful for understanding which sections users read.
   Add data-section="section-name" to section elements.
   ============================================================ */

(function initSectionTracking() {
  const sections = document.querySelectorAll('[data-section]');
  if (!sections.length || typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackEvent('section_visible', {
          section: entry.target.dataset.section,
          page: window.location.pathname,
        });
        observer.unobserve(entry.target); // fire once per section
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();


/* ============================================================
   CASE STUDY: TIME ON PAGE
   On case study pages, track time user spent reading before exit.
   Fires at 1min, 3min, 5min milestones.
   ============================================================ */

(function initReadTime() {
  if (!document.querySelector('.cs-hero')) return; // only on case study pages

  const milestones  = [60, 180, 300]; // seconds
  const start       = Date.now();

  milestones.forEach(secs => {
    setTimeout(() => {
      trackEvent('case_study_read_time', {
        seconds_spent: secs,
        case_study: document.querySelector('.cs-hero__title')?.textContent || 'unknown',
      });
    }, secs * 1000);
  });

  // Track exit
  window.addEventListener('beforeunload', () => {
    const duration = Math.round((Date.now() - start) / 1000);
    trackEvent('case_study_exit', {
      seconds_spent: duration,
      case_study: document.querySelector('.cs-hero__title')?.textContent || 'unknown',
    });
  });
})();
