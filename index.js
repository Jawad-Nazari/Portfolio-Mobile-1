const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu-items');
const menuitem = nav.querySelectorAll('.menu-item');
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
menuitem.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    menuOpen = false;
    nav.classList.remove('open');
  });
});