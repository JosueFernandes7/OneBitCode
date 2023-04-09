function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  if(tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('active');
    function activeTab(index) {

      tabContent.forEach(section => {
        section.classList.remove('active');
      })
      tabContent[index].classList.add('active');
    }
    
    tabMenu.forEach((item,index) => {
      item.addEventListener('click',() => {
        activeTab(index);
      })
    })
  }
}
initTabNav();

function initFaqAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if(accordionList.length) {
    const ativo = 'active';
    accordionList[0].nextElementSibling.classList.add(ativo);
    accordionList[0].classList.add(ativo);
  
    function activeAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }
    
    accordionList.forEach((item,index) => {
      item.addEventListener('click',activeAccordion);
    }) 

  }
}
initFaqAccordion();