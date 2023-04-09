export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let i = 0;
      const timer = setInterval(() => {
        i += incremento;
        numero.innerText = i;
        if (i >= total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 10);
    });
  }
  // uso do Observer 
  function ativaMutacao(element) {
    if(element[0].target.classList.contains('active') && element[0].target.hasAttribute('ativado')) {
      observador.disconnect();
      animaNumeros();
    }
    element[0].target.setAttribute('ativado','');
  }
  // Observador verifica se houver alteracao em algum atributto
  const observadorAlvo = document.querySelector('.numeros');
  const observador = new MutationObserver(ativaMutacao);
  observador.observe(observadorAlvo,{attributes: true})
}
