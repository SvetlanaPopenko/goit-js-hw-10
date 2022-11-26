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
      <h2 class="country__title">${country.name.official}</h2>
      <p class="country__desc">Capital:${country.capital}</p>
      <p class="country__desc">Population:${country.population}</p>
      <p class="country__desc">Languages:${Object.values(country.languages)}</p>
    </div>`;
    })
    .join('');
}

export { addCountryList, addCountryInfo };
