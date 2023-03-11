`use script`;

let menuActive = document.querySelector('.gamburg-menu');
let headerMenu = document.querySelector('.gamburg-icon')

function toggleMenu() {
  menuActive.classList.toggle('gamburg-menu-hidden')
}

headerMenu.addEventListener('click',  toggleMenu);