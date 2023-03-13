const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu-items');
let menuOpen = false;
hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
  }
  nav.classList.toggle('open');
});