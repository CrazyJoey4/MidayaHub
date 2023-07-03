const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');
const mainContent = document.getElementById('main-content');

// load movie from API
const apikey = 'c8ec4741';

async function loadMovies(searchTitle) {
    const URL = `http://www.omdbapi.com/?s=${searchTitle}&page=1&apikey=${apikey}`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    if (data.Response == "True") displayMovieList(data.Search);
}

async function popularMovies() {
    const URL = `http://www.omdbapi.com/?s=avengers&page=1&apikey=${apikey}`;
    const res = await fetch(URL);
    const data = await res.json();

    if (data.Response == "True") {        
        const movies = data.Search.slice(0, 8);
        displayPopularMovies(movies);
    }
}

function displayPopularMovies(movies) {
    mainContent.innerHTML = "";
    for (let idx = 0; idx < movies.length; idx++) {
        let movieCard = document.createElement('div');
        movieCard.dataset.id = movies[idx].imdbID;
        movieCard.classList.add('movie-card');

        if (movies[idx].Poster != "N/A") {
            moviePoster = movies[idx].Poster;
        } else {
            moviePoster = "media/smiley.png";
        }
        movieCard.innerHTML = `
        <div class="movie-card-thumbnail">
            <img class="popularPoster" src="${moviePoster}">
        </div>
        <div class="movie-card-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
        mainContent.appendChild(movieCard);

        movieCard.addEventListener('click', async () => {
            searchList.classList.add('hide-search-list');
            mainContent.classList.add('hide-main-content');
            movieSearchBox.value = "";
            const result = await fetch(`http://www.omdbapi.com/?i=${movies[idx].imdbID}&page=1&apikey=${apikey}`);
            const movieDetails = await result.json();

            displayMovieDetails(movieDetails);
        });
    }
    loadMovieDetails();
}

function findMovies() {
    let searchTerm = (movieSearchBox.value).trim();
    if (searchTerm.length > 0) {
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMovieList(movies) {
    searchList.innerHTML = "";
    for (let idx = 0; idx < movies.length; idx++) {
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID;
        movieListItem.classList.add('search-list-item');

        if (movies[idx].Poster != "N/A") {
            moviePoster = movies[idx].Poster;
        }
        else {
            moviePoster = "media/smiley.png";
        }
        movieListItem.innerHTML = `
        <div class="search-item-thumbnail">
            <img src="${moviePoster}">
        </div>
        <div class="search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails() {
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            searchList.classList.add('hide-search-list');
            mainContent.classList.add('hide-main-content');
            movieSearchBox.value = "";
            const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&page=1&apikey=${apikey}`);
            const movieDetails = await result.json();

            displayMovieDetails(movieDetails);
        });
    });
}

function displayMovieDetails(details) {
    resultGrid.innerHTML = `
    <div class="movie-poster">
        <img src="${(details.Poster != "N/A" ? details.Poster : "media/smiley.png")}" alt="movie-poster">
    </div>
    <div class="movie-info">
        <h3 class="movie-title">${details.Title}</h3>
        <ul class="movie-detail-info">
            <li class="year">Year: ${details.Year}</li>
            <li class="rated">Ratings: ${details.Rated}</li>
            <li class="released">Released On: ${details.Released}</li>
        </ul>
        <p class="genre"><b>Genre: </b> ${details.Genre}</p>
        <p class="writer"><b>Writer: </b> ${details.Writer}</p>
        <p class="actors"><b>Actors: </b> ${details.Actors}</p>
        <p class="plot"><b>Plot: </b> ${details.Plot}</p>
        <p class="language"><b>Language: </b> ${details.Language}</p>
        <p class="awards"><b><i class="fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
}

window.addEventListener('click', (event) => {
    if (event.target.className != "form-control") {
        searchList.classList.add('hide-search-list');
    }
});