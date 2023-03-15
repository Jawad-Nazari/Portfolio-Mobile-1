
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

const data = [
  {
    projectTitle: 'Tonic',
    imageURL: './image/card1.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://jawad-nazari.github.io/',
    sourceCode: 'https://github.com/Jawad-Nazari/Portfolio-Mobile-1',
  },
  {
    projectTitle: 'Multi-Post Stories',
    imageURL: './image/card2.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://jawad-nazari.github.io/',
    sourceCode: 'https://github.com/Jawad-Nazari/Portfolio-Mobile-1',
  },
  {
    projectTitle: 'Facebook 360',
    imageURL: './image/card3.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://jawad-nazari.github.io/',
    sourceCode: 'https://github.com/Jawad-Nazari/Portfolio-Mobile-1',
  },
  {
    projectTitle: 'Uber Navigation',
    imageURL: './image/card4.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://jawad-nazari.github.io/',
    sourceCode: 'https://github.com/Jawad-Nazari/Portfolio-Mobile-1',
  },
];
