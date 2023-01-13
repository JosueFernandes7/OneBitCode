let main = document.querySelector('#countries')

function createCountryCard(country) {
  const card = document.createElement('div');
  card.classList.add('country');
  
  const countryName = country.name.common;
  const conutryFlagSvg = country.flags.svg;

  const name = document.createElement('h2');
  name.textContent = countryName;

  const flag = document.createElement('img');
  flag.src = conutryFlagSvg;

  card.append(...[name,flag])
  main.append(card);
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const countries = await response.json()
  console.log(countries[0].name.common);
  countries.forEach(country => createCountryCard(country))
}

getCountries();