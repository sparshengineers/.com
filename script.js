// =================================================================
// SPARSH ENGINEERS AND CONSULTANTS — site script
// =================================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close menu after a link is tapped (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // ---- Header shadow on scroll ----
  var header = document.getElementById('site-header');
  function onScroll() {
    if (window.scrollY > 12) {
      header.style.boxShadow = '0 6px 18px rgba(0,0,0,0.18)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
  if (header) {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Active nav link highlight while scrolling ----
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.main-nav a');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
