import CountDown from "./CountDown.js";

const tempoNatal = new CountDown("24 December 2022 23:02 GMT-0300");

let h1 = document.createElement("h1");
document.documentElement.appendChild(h1);
let tempo = setInterval(() => {
  h1.innerText = `${tempoNatal.total.days}d ${tempoNatal.total.hours}h ${tempoNatal.total.minutes}m ${tempoNatal.total.seconds}s para o Natal`;
  if(tempoNatal._timeStamp == 0) {
    clearInterval(tempo);
  }
},1000)
console.log(h1)
