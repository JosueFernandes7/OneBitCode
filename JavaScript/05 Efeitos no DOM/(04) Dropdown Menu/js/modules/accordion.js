export default function initFaqAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  if (accordionList.length) {
    const ativo = "active";
    accordionList[0].nextElementSibling.classList.add(ativo);
    accordionList[0].classList.add(ativo);

    function activeAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }

    accordionList.forEach((item, index) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
