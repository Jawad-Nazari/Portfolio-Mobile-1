const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu-items');
const menuItem = nav.querySelectorAll('.menu-item');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
    document.body.classList.add('stop-scrolling');
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
    document.body.classList.remove('stop-scrolling');
  }
  nav.classList.toggle('open');
});

menuItem.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    menuOpen = false;
    nav.classList.remove('open');
    document.body.classList.remove('stop-scrolling');
  });
});
