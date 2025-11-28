// Javascript
document.addEventListener('DOMContentLoaded', () => {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // highlight active nav link based on current filename
  const links = document.querySelectorAll('.nav-link');
  const current = (location.pathname.split('/').pop() || 'index.html');
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    // compare only filenames or anchors
    const file = href.split('/').pop();
    if (file && file === current) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    } else if (href.startsWith('#') && (location.hash === href)) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    } else if ((href === 'index.html' || href === '') && (current === 'index.html' || current === '')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    } else {
      a.classList.remove('active');
      a.removeAttribute('aria-current');
    }
  });
});

// toggle nav for small screens
function toggleNav(){
  const nav = document.querySelector('nav');
  if(!nav) return;
  const isHidden = getComputedStyle(nav).display === 'none';
  nav.style.display = isHidden ? 'flex' : 'none';
  if (window.innerWidth <= 880 && isHidden) {
    nav.style.flexDirection = 'column';
  } else {
    nav.style.flexDirection = 'row';
  }
}

