const hamgurger = document.querySelector('.hamburger-icon');
const menuItems = document.querySelector('.menu-items');
const btnClose = document.querySelector('.close');
const menuItem = document.querySelectorAll('.menu-item');
hamgurger.addEventListener('click', () => {
  if (menuItems.style.display === 'none' || btnClose.style.display === 'none') {
    menuItems.style.display = 'flex';
    btnClose.style.display = 'block';
  } else {
    menuItems.style.display = 'none';
  }
});
btnClose.addEventListener('click', () => {
  if (menuItems.style.display === 'flex') {
    menuItems.style.display = 'none';
    btnClose.style.display = 'none';
  }
});
for (let i = 0; i < menuItem.length; i += 1) {
  menuItem[i].onclick = () => {
    menuItems.style.display = 'none';
    btnClose.style.display = 'none';
  };
}

