
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

document.querySelectorAll('.btn').forEach((occurence) => {
  const id = occurence.getAttribute('id');
  const popupCard = `
  <div class="project1" id="project1">
        <div class="popupTop">
            <div class="projectPopupTitle">
              <div class="titlePopup">
                <h3 class="comp-title">${data[id].projectTitle}</h3>
                <img
                id="popupClose${id}"
                class="popupClose"
                src="./icons/close.svg"
                alt="closeBtn"
                />
              </div>
              <ul class="work-title">
                    <li class="client">CANOPY</li>
                    <li><img src="./image/Counter.svg" alt="dot" /></li>
                    <li class="dim">Back End Dev</li>
                    <li><img src="./image/Counter.svg" alt="dot" /></li>
                    <li class="dim">2015</li>
                </ul>
            </div>
            <img class="projectImage" src=${data[id].imageURL} alt="projectImage">
          <div class="popupDown">
          <div class="project-desc popupDesc">${data[id].description}</div>
            <div class="popupBtns">
              <ul class="tags">
                <li class="tag">${data[id].technologies[0]}</li>
                <li class="tag">${data[id].technologies[1]}</li>
                <li class="tag">${data[id].technologies[2]}</li>
                <li class="tag">${data[id].technologies[3]}</li>
              </ul>
              <hr>
              <div class="actionBtnPopup">
               <a class="btn btnPopup" href=${data[id].seeLive} target='blank'>
               See Live <img class="seeAll" src='./Icons/Icon.svg' alt="seeLive"></a>
              <a class="btn btnPopup" href=${data[id].sourceCode} target='blank'>
              See Source <img class="seeAll" src='./icons/github.svg' alt="githubCode"></a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>`;
  occurence.addEventListener('click', () => {
    const body = document.getElementById('body');
    const section = document.createElement('section');
    section.innerHTML = popupCard;
    section.classList.add('hide');
    body.appendChild(section);
    section.classList.add('projectPopup');
    if (section.classList.contains('hide')) { section.classList.remove('hide'); }
    const hidePopup = document.getElementById(`popupClose${id}`);
    hidePopup.addEventListener('click', () => {
      body.removeChild(section);
    });
  });
});
