import './css/styles.css';
import './js/search';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const BASE_URL = 'https://restcountries.com/v3.1/name/'

import { refs } from '../src/js/refs'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


refs.form.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault();

    const searchQuery = evt.target.value.trim();
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';

    if (!searchQuery) {
        return
    }
    fetchCountries(searchQuery)
        .then(country => {
            if (country.length > 10) {
                return notifyInfo;
            }
            if (country.length > 1 && country.length < 10) {
                refs.countryList.innerHTML = addCountryList(country);
            } else {
                refs.countryInfo.innerHTML = addCountryInfo(country);
            }
        })
        .catch(error => notifyFailure());
}
const notifyFailure = () => {
    return Notify.failure('Oops, there is no country with that name', { time: 1000 }
    )
};
const notifyInfo = () => {
    return Notify.info(
        'Too many matches found. Please enter a more specific name.', { time: 1000 }
    )
}
        
export function fetchCountries(searchValue) {
    return fetch(`${BASE_URL}${searchValue}?fields=name.official,capital,population,flags,languages`)
        .then(resp => {
            console.log(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .catch(err => console.error(err));
} 


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