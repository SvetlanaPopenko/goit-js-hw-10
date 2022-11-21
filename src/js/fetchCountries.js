const BASE_URL = 'https://restcountries.com/v3.1/name/'

form.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault();
}


function fetchCountries(searchValue) {
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


