// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = false;
var possuiCasa = false;
var darCredito = possuiCarro && possuiCasa ? true : false;
console.log(darCredito);

// caso ele tenha  carro ou casa casa ele ganha 1000 reais
var ganho = possuiCarro || possuiCasa ? 0 : 1000;