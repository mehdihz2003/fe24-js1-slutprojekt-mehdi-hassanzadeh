import { API_TOKEN } from './api_token.js';
import { fetchTopRatedMovies, fetchPopularMovies, fetchSearch } from './api_calls.js';
import { display10Movies, displaySearch, displayError } from './display.js';
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

    const topRatedMovies = await fetchTopRatedMovies(options, containerDiv);
    display10Movies(topRatedMovies, containerDiv);

    if(topRatedMovies.length == 0) {
        displayError('No results found for your search. Please try again at a later time.', containerDiv);
    }

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

    const popularMovies = await fetchPopularMovies(options, containerDiv);
    display10Movies(popularMovies, containerDiv);

    if(popularMovies.length == 0) {
        displayError('No results found for your search. Please try again at a later time.', containerDiv);
    }

    hideLoading();
})

const delay = 300;
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
    //timer may cause search results to be incorrect if timed wrong.
    //timer is needed otherwise API Rate Limit will be exceeded quickly
    clearTimeout(timer);
    timer = setTimeout(async () => {
        showLoading();

        const results = await fetchSearch(options, containerDiv, searchInput);
        
        displaySearch(results, containerDiv);
        
        if(results.length == 0) {
            displayError('No results found for your search. Please try again with different keywords.', containerDiv);
        }
        
        hideLoading();
    }, delay);
})