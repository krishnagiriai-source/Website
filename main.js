/**
 * AKNITECH – Contact Page JavaScript
 * Features: Mobile nav toggle, sticky header, scroll-reveal,
 *           client-side form validation, footer year.
 */

/* ══════════════════════════════════
   DOM READY
══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initScrollReveal();
  initContactForm();
  initFooterForm();
  setFooterYear();
});


/* ══════════════════════════════════
   1. MOBILE NAVIGATION
══════════════════════════════════ */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  // Toggle open/close
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
    document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  // Mobile accordion for dropdowns
  const dropdownItems = document.querySelectorAll('.nav__item--dropdown');
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav__link--has-dropdown');
    if (!link) return;

    link.addEventListener('click', (e) => {
      // Only intercept on mobile (nav is fixed/translated)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('is-open');
      }
    });
  });

  // Close nav when a final link is clicked
  nav.querySelectorAll('.nav__dropdown-link, .nav__link:not(.nav__link--has-dropdown)').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  });
}


/* ══════════════════════════════════
   2. STICKY HEADER SHADOW
══════════════════════════════════ */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}


/* ══════════════════════════════════
   3. SCROLL REVEAL
══════════════════════════════════ */
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  // Apply delay from data-delay attribute (ms)
  elements.forEach(el => {
    const delay = el.dataset.delay;
    if (delay) el.style.transitionDelay = `${delay}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}


/* ══════════════════════════════════
   4. CONTACT FORM VALIDATION
══════════════════════════════════ */
function initContactForm() {
  const form       = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  const errorMsg   = document.getElementById('formError');
  const submitBtn  = document.getElementById('submitBtn');
  if (!form) return;

  // Real-time validation on blur
  form.querySelectorAll('.form-input[required]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) validateField(input);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all required fields
    const fields   = form.querySelectorAll('.form-input[required]');
    let   allValid = true;
    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) return;

    // ── Simulate async form submission ──
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-submit__text').textContent = 'Sending…';

    try {
      // Replace this block with a real API call (Formspree, EmailJS, etc.)
      await fakeSend(1200);

      successMsg.hidden = false;
      errorMsg.hidden   = true;
      form.reset();
      form.querySelectorAll('.form-input').forEach(i => {
        i.classList.remove('is-valid', 'is-invalid');
      });
    } catch {
      errorMsg.hidden   = false;
      successMsg.hidden = true;
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-submit__text').textContent = 'Send Message';
    }
  });
}

/**
 * Validate a single input field.
 * @param {HTMLInputElement|HTMLTextAreaElement} input
 * @returns {boolean} valid
 */
function validateField(input) {
  const errorEl = document.getElementById(input.id + 'Error');
  let   message = '';

  if (!input.value.trim()) {
    message = 'This field is required.';
  } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
    message = 'Enter a valid email address.';
  } else if (input.type === 'tel' && !/^[\d\s\+\-\(\)]{7,15}$/.test(input.value.trim())) {
    message = 'Enter a valid phone number.';
  } else if (input.tagName === 'TEXTAREA' && input.value.trim().length < 10) {
    message = 'Message must be at least 10 characters.';
  }

  const isValid = message === '';
  input.classList.toggle('is-invalid', !isValid);
  input.classList.toggle('is-valid',   isValid);
  if (errorEl) errorEl.textContent = message;

  return isValid;
}

/** Fake async delay to simulate network call */
function fakeSend(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/* ══════════════════════════════════
   5. FOOTER QUICK FORM
══════════════════════════════════ */
function initFooterForm() {
  const form = document.getElementById('footerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.footer-form__btn');
    btn.textContent = '✓ Sent!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}


/* ══════════════════════════════════
   6. DYNAMIC YEAR IN FOOTER
══════════════════════════════════ */
function setFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}
