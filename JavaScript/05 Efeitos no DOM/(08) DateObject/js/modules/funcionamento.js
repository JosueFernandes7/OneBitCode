export default function initFuncionamento() {
  
  const funcionamento = document.querySelector('[data-dia]');
  const diasSemana = funcionamento.dataset.dia.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.hora.split(',').map(Number);
  // macete para retornar já como typeof number
  
  const dataAgora = new Date();
  const diaAtual = dataAgora.getDay();
  const horaAtual = dataAgora.getHours();
  verificaHorario(diaAtual, horaAtual)
  
  function verificaHorario(dia,hora) {
    if( diasSemana.indexOf(dia) != -1 && horarioSemana[0] <= hora && hora<horarioSemana[1]) {
      funcionamento.classList.add('aberto');
    }
  }
}

