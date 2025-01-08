export function display10Movies(movies, containerDiv) {
    containerDiv.innerHTML = '';

    for(let i = 0; i < 10; i++) {
        const container = document.createElement('div');
        container.classList.add('result-container');
    
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/original${movies[i].poster_path}`;
        img.classList.add('result-image');
    
        const info = document.createElement('div');
        info.classList.add('result-info');
    
        const title = document.createElement('h2');
        title.textContent = movies[i].title;
    
        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${movies[i].release_date}`;
    
        info.append(title, releaseDate);
        container.append(img, info);    
        containerDiv.append(container);
    }
}

//ChatGPT - ternary operator
export function displaySearch(searchResults, containerDiv) {
    containerDiv.innerHTML = '';

    for(const result of searchResults) {
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');

        const img = document.createElement('img');
        img.classList.add('result-image');

        const info = document.createElement('div');
        info.classList.add('result-info');

        if (result.media_type == 'movie' || result.media_type == 'tv') {
            img.src = result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : '../images/noImage.svg.png';
        
            const overview = document.createElement('h6');
            overview.textContent = result.overview;
        
            const title = document.createElement('h2');
            title.textContent = result.media_type == 'movie' ? `Movie: ${result.title}`  : `TV: ${result.name}`;
        
            const releaseDate = document.createElement('p');
            releaseDate.textContent = result.media_type == 'movie' ? result.release_date : result.first_air_date;
        
            info.append(title, releaseDate, overview);
        }
        else {
            img.src = result.profile_path ? `https://image.tmdb.org/t/p/original${result.profile_path}` : '../images/noImage.svg.png';

            const name = document.createElement('h2');
            name.textContent = result.name;

            const knownFor = document.createElement('p');
            knownFor.textContent = result.known_for_department;

            info.append(name, knownFor);

            for (const popularWorks of result.known_for) {
                const work = document.createElement('h6');
                work.textContent = popularWorks.media_type == 'movie' ? `Movie: ${popularWorks.title}` : `TV: ${popularWorks.name}`;
                
                info.append(work);
            }
        }

        resultContainer.append(img, info);
        containerDiv.append(resultContainer);
    }
}

export function displayError(message, containerDiv) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = message;
    containerDiv.appendChild(errorDiv);
}