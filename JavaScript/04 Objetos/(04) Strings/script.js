// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: "Taxa do Pão",
//     valor: "R$ 39",
//   },
//   {
//     descricao: "Taxa do Mercado",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 99",
//   },
//   {
//     descricao: "Taxa do Banco",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 49",
//   },
// ];
// let taxa = 0;
// let recebimento = 0;
// transacoes.forEach((item) => {
//   const cleanNumber = +item.valor.slice(3, 20);
//   if (item.descricao.includes("Taxa")) {
//     taxa += cleanNumber;
//   } else if (item.descricao.includes("Recebimento")) {
//     recebimento += cleanNumber;
//   }
// });
// console.log(taxa,recebimento,recebimento-taxa);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const transpArray = transportes.split(";");
// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
html = html.split('span').join('a');
console.log(html);
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase[--frase.length]);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let taxas =0;
transacoes2.forEach(item => {
  if(item.toUpperCase().includes('TAXA')) {
    taxas++;
  }
})