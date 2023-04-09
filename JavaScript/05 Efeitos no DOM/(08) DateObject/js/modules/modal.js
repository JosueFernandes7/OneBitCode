export default function initModal() {
  const container = document.querySelector(".modal-container");
  const entrar = document.querySelector('[data-modal="abrir"]');
  const sair = document.querySelector('[data-modal="fechar"]');

  if (container && entrar && sair) {

    function TrocaModal(e) {
      e.preventDefault();
      container.classList.toggle("ativo");
    }
    
    function cliqueForaModal(e) {
      if (e.target == this) TrocaModal(e)
    }

    container.addEventListener("click", cliqueForaModal);
    entrar.addEventListener("click", TrocaModal);
    sair.addEventListener("click", TrocaModal);
  }
}
