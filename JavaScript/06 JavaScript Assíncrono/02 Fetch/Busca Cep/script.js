const cep = document.getElementById('cep');
const mostraCep = document.getElementById('mostraCep');
const buscaCep = document.getElementById('buscaCep');

buscaCep.addEventListener('click',procuraCep);

function procuraCep(e) {
  e.preventDefault();
  let CEP = cep.value;
  let endereco = fetch(`https://viacep.com.br/ws/${CEP}/json/`)
  .then(r =>  r.json())
  .then(r => {
    if(r.logradouro) {
      mostraCep.innerText = `${r.logradouro}, ${r.localidade} ${r.uf}`;
    } else {
      mostraCep.innerText = `Cep não encontrado...`
    }
  })
  .catch(r => alert("CEP INVALIDO"))
}