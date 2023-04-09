const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
console.log(tabContent);

if(tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('active');
  function activeTab(index) {
    console.log(index);
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