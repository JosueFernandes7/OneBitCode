function initTabNav() {
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
initTabNav();

function initFaqAccordion() {
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
initFaqAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa
    // const top = section.offsetTop;
    // const top = section.getBoundingClientRect().top; mesma coisa
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimatelScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHalf = window.innerHeight * 0.6;
  
  if (sections.length) {
    function scrollAnimated() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;

          const isVisible = sectionTop - windowHalf < 0;
          if (isVisible) {
            section.classList.add("active");
          }
        });
      }
      scrollAnimated();
      window.addEventListener("scroll", scrollAnimated);
  }
}
initAnimatelScroll();
