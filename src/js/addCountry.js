function addCountryList(arr) {
    return arr.map(country => {
        `<li class="country__item"><img class "country__img" src="${country.flag.svg}" alt="${country.name}" width = "100"/>
    <h2>${country.name.official}</h2> </li>`
    }).join('');
}

function addCountryInfo(arr) {
    return arr.map(country => {
        `<div><img src="${country.flag.svg}" alt="${country.name}" width= "100"/><h2 class="country__title">${country.name.official}</h2>
      <p class="country_desc">Capital:${country.capital}</p><p class="country__desc">Population:</p>${country.population}<p class="country__desc">Languages:${Object.values(country.languages)}</p>
    </div>`;
    }).join('');
}

export { addCountryList, addCountryInfo };