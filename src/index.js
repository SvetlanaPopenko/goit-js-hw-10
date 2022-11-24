import './css/styles.css';
import debounce from 'lodash.debounce';
import { onSearch } from './js/search';
import { refs } from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.form.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

