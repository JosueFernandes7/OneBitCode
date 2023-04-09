import outSideClick from "./outsideclick.js";

export default function initMenuMobile() {
  
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click','touchstart'];
  
  if(menuBtn) {
    function openMenu(event) {
    menuList.classList.add('active');
    menuBtn.classList.add('active');
    outSideClick(menuList,eventos, () => {
      menuList.classList.remove('active');
      menuBtn.classList.remove('active');
    });
    }
    eventos.forEach(eventos => {
      
      menuBtn.addEventListener(eventos,openMenu)
    })
  
  }
}
