export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("active");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });
      const animacao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("active",animacao);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}


