export default function initAnimatelScroll() {
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
