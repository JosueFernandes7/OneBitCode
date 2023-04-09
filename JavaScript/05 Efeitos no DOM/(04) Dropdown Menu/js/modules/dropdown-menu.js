import outSideClick from "./outsideclick.js";
export default function initDropDownMenu() {
  console.log('teste')
}

const dropDownMenus = document.querySelectorAll('[data-dropdown]');

dropDownMenus.forEach(menu => {
  ['click','touchstart'].forEach(event => {
    menu.addEventListener(event,showMenu);
  })
})

function showMenu(e) {
  e.preventDefault();
  this.classList.add('ativo')
  outSideClick(this,['click','touchstart'],() => {
    this.classList.remove('ativo')
  });
}

