const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTNmMTZmMDFlYjAyOTJhYTViMWRlNmU0ZjU5YzU2OSIsIm5iZiI6MTczNTE5NzA4Mi4wMzQsInN1YiI6IjY3NmQwMTlhNzY5ODUyZjI5MDEyODM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mHhxKf4XQGmsKVzVU9Y-66GzHisBZK7kL94XOeev14'

const topRatedMoviesBtn = document.querySelector('#topRatedMovies');
topRatedMoviesBtn.addEventListener('click', async (event) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`
        }
    };
      
    const topRatedMovies = await fetchTopRatedMovies(options);
})

async function fetchTopRatedMovies(options) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}