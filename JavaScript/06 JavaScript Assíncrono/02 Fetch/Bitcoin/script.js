const h1 = document.getElementById('bitcoin');

atualizaBitcoin()
setInterval(atualizaBitcoin,1000*30);
function atualizaBitcoin() {
  const bitcoin = fetch('https://blockchain.info/ticker') .then(r => r.json())
  .then(r => r.BRL)
  .then(real => {
    h1.innerHTML = `1 bitcoin = <span id="btc">${real.buy} R$</span>`
  })

}