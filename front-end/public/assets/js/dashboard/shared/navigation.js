const sidebar = document.querySelector('#sidebar');
const toggle = document.querySelector('#menu-toggle');
const shade = document.querySelector('#menu-shade');
const closeButton = document.querySelector('#menu-close');
const desktop = window.matchMedia('(min-width:1024px)');
function closeMenu(restoreFocus = true) { sidebar.classList.remove('is-open'); shade.hidden = true; toggle.setAttribute('aria-expanded', 'false'); sidebar.removeAttribute('role'); sidebar.removeAttribute('aria-modal'); if (restoreFocus) toggle.focus(); }
toggle.addEventListener('click', () => { sidebar.classList.add('is-open'); shade.hidden = false; toggle.setAttribute('aria-expanded', 'true'); sidebar.setAttribute('role', 'dialog'); sidebar.setAttribute('aria-modal', 'true'); closeButton.focus(); });
closeButton.addEventListener('click', () => closeMenu());
shade.addEventListener('click', () => closeMenu());
sidebar.addEventListener('keydown', event => { if (desktop.matches) return; if (event.key === 'Escape') closeMenu(); if (event.key === 'Tab') { const controls = [...sidebar.querySelectorAll('button,a')]; const first = controls[0], last = controls.at(-1); if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } } });
sidebar.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => { sidebar.querySelectorAll('nav a').forEach(item => { item.classList.remove('active'); item.removeAttribute('aria-current'); }); link.classList.add('active'); link.setAttribute('aria-current', 'location'); if (!desktop.matches) { closeMenu(false); const target = document.querySelector(link.getAttribute('href')); target.setAttribute('tabindex', '-1'); target.focus(); } }));
desktop.addEventListener('change', () => closeMenu(false));
