let j = 1;
let timer2 = setInterval(() => {
  console.log(`passaram-se ${j}s`)
  j++;
  if(j > 3) {
    console.log("terminou...");
    clearInterval(timer2)
  }
}, 1000 )

console.log("eaedadeda");