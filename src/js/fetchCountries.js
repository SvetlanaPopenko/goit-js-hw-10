const BASE_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(searchValue) {
  return fetch(
    `${BASE_URL}${searchValue}?fields=name,capital,population,flags,languages`
  )
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(error => console.error(error));
}
