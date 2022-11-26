function addCountryList(arr) {
  return arr
    .map(country => {
        return `<li class="country__item">
      <img class "country__img" src="${country.flags.svg}" alt="${country.name}" width = "100">
    <h2>${country.name.official}</h2> 
    </li>`;
    })
    .join('');
}

function addCountryInfo(arr) {
  return arr
    .map(country => {
        return `<div class="country">
      <img src="${country.flags.svg}" alt="${country.name}" width= "200">
      <h2 class="country__title"><span class="country__text">${country.name.official}</span></h2>
      <p class="country__desc">Capital:<span class="country__text">${country.capital}</span></p>
      <p class="country__desc">Population:<span class="country__text">${country.population}</span></p>
      <p class="country__desc">Languages:<span class="country__text">${Object.values(country.languages)}</span></p>
    </div>`;
    })
    .join('');
}

export { addCountryList, addCountryInfo };
