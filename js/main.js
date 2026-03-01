/* ══════════════════════════════════════════════════════════
   AcuIT Landing Page — main.js
   Interactions: scroll reveal, navbar, language toggle, mobile menu
   ══════════════════════════════════════════════════════════ */

// ── Scroll Reveal (IntersectionObserver) ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ── Language Toggle ──
function setLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.dataset.lang !== lang;
  });
  document.documentElement.lang = lang;
  localStorage.setItem('acuit-lang', lang);

  // Update toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Init language: saved > browser detect > default EN
(function initLang() {
  const saved = localStorage.getItem('acuit-lang');
  const browser = navigator.language.startsWith('ko') ? 'ko' : 'en';
  setLang(saved || browser);
})();

// ── Mobile Menu ──
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

function closeMobileMenu() {
  mobileMenuBtn.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

// Close mobile menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// ── Count Up Animation (for future use with stats) ──
function countUp(el, target, duration, prefix, suffix) {
  duration = duration || 2000;
  prefix = prefix || '';
  suffix = suffix || '';
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = prefix + Math.floor(eased * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// ── Smooth scroll for anchor links (fallback for older browsers) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
