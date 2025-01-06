import { API_TOKEN } from './api_token.js';
import { fetchTopRatedMovies, fetchPopularMovies, fetchSearch } from './api_calls.js';
import { display10Movies, displaySearch } from './display.js';
import { showLoading, hideLoading } from './loading_animation.js';

const containerDiv = document.querySelector('#container');

const topRatedBtn = document.querySelector('#topRated');
topRatedBtn.addEventListener('click', async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };
      
    showLoading();

    const topRatedMovies = await fetchTopRatedMovies(options);
    display10Movies(topRatedMovies, containerDiv);

    hideLoading();
})

const popularBtn = document.querySelector('#popular');
popularBtn.addEventListener('click', async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    showLoading();

    const popularMovies = await fetchPopularMovies(options);
    display10Movies(popularMovies, containerDiv);

    hideLoading();
})

const delay = 1000;
let timer;

const searchField = document.querySelector('#searchField');
searchField.addEventListener('input', event => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    const searchInput = event.target.value.trim();
    if(!searchInput) {
        containerDiv.innerHTML = '';
        return;
    }

    //ChatGPT - timer to delay API calls
    clearTimeout(timer);
    timer = setTimeout(async () => {
        showLoading();

        const results = await fetchSearch(options, searchInput);
        displaySearch(results, containerDiv);

        hideLoading();
    }, delay);
})