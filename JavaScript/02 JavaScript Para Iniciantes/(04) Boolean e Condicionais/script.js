// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 20;
var idadeParente = 30;

if (minhaIdade === idadeParente) {
  console.log("Mesma idade");
} else if (minhaIdade > china) {
  console.log("eu sou mais velho");
} else {
  console.log("eu sou mais novo");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 + " " && 5 - 2; // todas sao true, entao sai 5 -2  = 3

console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false, pos eh undefined
var dinheiroNaConta = 0; // false 0 true 1
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil eh maior");
} else {
  console.log("China eh maior");
}
// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); // false Gato !== gato
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // Cao pois ele e o ultimo gato e cao sao true e ele é o ultimo true
} else {
  console.log("Falso");
}
