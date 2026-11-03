(() => {
  'use strict';
  const nav = document.getElementById('primary-nav');
  const menu = document.getElementById('menu-button');
  const searchButton = document.getElementById('search-shortcut');
  const shareButton = document.getElementById('share-site');
  const search = document.getElementById('directory-query');
  const filters = Array.from(document.querySelectorAll('.filter-tab'));
  const links = Array.from(document.querySelectorAll('.directory-link'));
  const noMatches = document.getElementById('no-matches');
  const toast = document.getElementById('site-toast');
  let filter = 'all';
  let toastTimer;
  function closeMenu() {
    nav.classList.remove('nav-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation menu');
    document.body.classList.remove('menu-is-open');
  }
  menu.addEventListener('click', () => {
    const next = !nav.classList.contains('nav-open');
    nav.classList.toggle('nav-open', next);
    menu.setAttribute('aria-expanded', String(next));
    menu.setAttribute('aria-label', next ? 'Close navigation menu' : 'Open navigation menu');
    document.body.classList.toggle('menu-is-open', next);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      openSearch();
    }
  });
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('nav-open') && !event.target.closest('.header-layout')) closeMenu();
  });
  document.getElementById('year').textContent = String(new Date().getFullYear());
  function updateLinks() {
    const q = search.value.toLocaleLowerCase().trim();
    let count = 0;
    for (const link of links) {
      const matchCategory = filter === 'all' || link.dataset.category === filter;
      const matchText = !q || link.textContent.toLocaleLowerCase().includes(q);
      const show = matchCategory && matchText;
      link.hidden = !show;
      if (show) count++;
    }
    noMatches.hidden = count > 0;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    filters.forEach(other => {
      const selected = other === button;
      other.classList.toggle('selected', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    updateLinks();
  }));
  search.addEventListener('input', updateLinks);
  function openSearch() {
    closeMenu();
    document.getElementById('all-links').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    setTimeout(() => { search.focus({ preventScroll: true }); }, 300);
  }
  searchButton.addEventListener('click', openSearch);
  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
  }
  shareButton.addEventListener('click', async () => {
    const url = location.href.split('#')[0];
    if (location.protocol === 'file:') { showToast('Publish the website to create a shareable public link.'); return; }
    try {
      if (navigator.share) { await navigator.share({title: 'Dread Captain James', url}); return; }
      if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(url); showToast('Website link copied!'); return; }
      window.prompt('Copy this website link:', url);
    } catch (err) {
      if (err.name !== 'AbortError') window.prompt('Copy this website link:', url);
    }
  });
  // Keep the active page section discoverable on desktop without adding a route dependency.
  const navLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));
  if ('IntersectionObserver' in window) {
    const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const active = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (!active) return;
      navLinks.forEach(a => a.classList.toggle('current', a.getAttribute('href') === '#' + active.target.id));
    }, {rootMargin:'-15% 0px -68% 0px',threshold:[0,.05,.25]});
    sections.forEach(section => observer.observe(section));
  }
})();
