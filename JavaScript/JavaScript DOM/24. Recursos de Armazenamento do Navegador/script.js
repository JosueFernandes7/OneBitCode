
let cookieKeep = document.querySelector('#cookieBtn').addEventListener("click", () => {
  const input = document.querySelector("#cookie");
  // cookieName = value; expires = UTCSStringDate; path =/
  const cookie = 'info=' + input.value + ';';
  let dataFutura = new Date();
  tempoFuturo = dataFutura.getTime() + (5*60 *1000);
  let novaData = new Date(tempoFuturo);
  console.log(dataFutura);
  console.log(novaData);

  const expiration = "expires=" +novaData+ ";"
  const path = "path=/";
  // console.log(dataAtual.setMinutes(45));
 
  input.value = "";
  document.cookie = cookie + expiration + path;
});
// let cookieRead = document.querySelector('#cookie2Btn').addEventListener("click", (e) => {
//   alert(e.target);
// });

