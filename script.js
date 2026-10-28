const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
  btn.textContent = isLight ? '𖤓' : '⏾';
});

const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

 const marquee = document.getElementById('marquee');
    const group = marquee.querySelector('.marquee-group');
    
    // Append duplicate group
    const clone = group.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    marquee.appendChild(clone);