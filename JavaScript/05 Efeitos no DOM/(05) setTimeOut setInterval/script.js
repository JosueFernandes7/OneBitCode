
const body = document.querySelector('body');
let j =0;
setInterval(() => {
  if(j % 2 === 0) body.style.backgroundColor = 'blue',j=1;
  else body.style.backgroundColor = 'red', j = 0;

},2000)

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');
const div = document.querySelector('.tempo');

iniciar.addEventListener('click',iniciarTimer);
pausar.addEventListener('click',pausarTimer);
reiniciar.addEventListener('dblclick',reiniciarTimer);
let i = 0;
let temporizador;
function iniciarTimer() {
  if(!div.hasAttribute('on')) {
    temporizador = setInterval(() => {
      div.innerText = i++;
    },100);
  } 
  
  div.setAttribute('on', '');
}
function pausarTimer() {
  clearInterval(temporizador);
}
function reiniciarTimer(){
  div.removeAttribute('on');
  i=0;
  div.innerText = i;
  iniciarTimer();
}