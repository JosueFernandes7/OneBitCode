

export default function initScrollSuave() {
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


