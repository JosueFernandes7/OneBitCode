const nextJoke = document.querySelector('#nextJoke');
const joke = document.querySelector('#joke');

nextJoke.addEventListener('click',changeJoke);

function changeJoke() {
  const newJoke = fetch('https://api.chucknorris.io/jokes/random').then(r => r.json())
  .then(r => {
    joke.innerText = r.value;
  })
}
changeJoke();