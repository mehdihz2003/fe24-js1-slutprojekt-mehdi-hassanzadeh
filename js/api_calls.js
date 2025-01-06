import { displayError } from './display.js';

export async function fetchTopRatedMovies(options, containerDiv) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);

        console.log(response);

        if(!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);        
        }

        const data = await response.json();

        console.log(data);

        return data.results;
    } 
    catch (error) {
        console.error(error);
        displayError('Fetching results. Please try again at a later time.', containerDiv)
    }
}

export async function fetchPopularMovies(options, containerDiv) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

        console.log(response);

        if(!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);        
        }

        const data = await response.json();

        console.log(data);

        return data.results;
    } 
    catch (error) {
        console.error(error);
        displayError('Fetching results. Please try again at a later time.', containerDiv)
    } 
}

//ChatGPT - encodeURIComponent
export async function fetchSearch(options, containerDiv, searchInput) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(searchInput)}&include_adult=true&language=en-US&page=1`, options);
        
        console.log(response);

        if(!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);        
        }

        const data = await response.json();

        console.log(data);

        return data.results;
    }
    catch (error) {
        console.error(error);
        displayError('Fetching results. Please try again at a later time.', containerDiv)
    } 
}