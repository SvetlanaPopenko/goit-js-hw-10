import { fetchCountries } from './fetchCountries';
import { refs } from './refs';
import { notifyFailure,notifyInfo } from './notify';
import { addCountryList, addCountryInfo } from './addCountry';

export function onSearch(evt) {
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
                return notifyInfo();
            }
            if (country.length > 1 && country.length < 10) {
                refs.countryList.innerHTML = addCountryList(country);
            } else {
                refs.countryInfo.innerHTML = addCountryInfo(country);
            }
        })
        .catch(error => notifyFailure());
}


