const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTNmMTZmMDFlYjAyOTJhYTViMWRlNmU0ZjU5YzU2OSIsIm5iZiI6MTczNTE5NzA4Mi4wMzQsInN1YiI6IjY3NmQwMTlhNzY5ODUyZjI5MDEyODM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mHhxKf4XQGmsKVzVU9Y-66GzHisBZK7kL94XOeev14'

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
      
    const topRatedMovies = await fetchTopRatedMovies(options);

    display10Movies(topRatedMovies);
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

    const popularMovies = await fetchPopularMovies(options);

    display10Movies(popularMovies);
})

async function fetchTopRatedMovies(options) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);

        const data = await response.json();
        return data.results;
    } 
    catch (error) {
        console.error(error);
    }
}

async function fetchPopularMovies(options) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

        const data = await response.json();
        return data.results;
    } 
    catch (error) {
        console.error(error);
    } 
}

function display10Movies(movies) {
    containerDiv.innerHTML = '';
    
    for(let i = 0; i < 10; i++) {
        const container = document.createElement('div');
        container.classList.add('movie-container');
    
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/original${movies[i].poster_path}`;
        img.classList.add('movie-image');
    
        const info = document.createElement('div');
        info.classList.add('movie-info');
    
        const title = document.createElement('h2');
        title.textContent = movies[i].title;
    
        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${movies[i].release_date}`;
    
        info.appendChild(title);
        info.appendChild(releaseDate);
    
        container.appendChild(img);
        container.appendChild(info);
    
        containerDiv.appendChild(container);
    }
}