import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, onAuthStateChanged, deleteUser } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, collection, getDocs, query, where, updateDoc, deleteDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHJxTqtydKNMc7kqg049fcg60Mluw_Zts",
  authDomain: "midayahub-db.firebaseapp.com",
  databaseURL: "https://midayahub-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "midayahub-db",
  storageBucket: "midayahub-db.appspot.com",
  messagingSenderId: "800766212932",
  appId: "1:800766212932:web:cd0a1a0cf876cd76a67511",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


var userId = localStorage.getItem('userId');
const bookmarkList = document.getElementById('bookmark-list');

displayBookmarkedMovies();

// Add listener to the button
bookmarkbtn.addEventListener('click', bookmark);

function bookmark() {
  const movieID = document.querySelector('.movie-id').textContent;

  const usersCollectionRef = collection(db, 'users');
  const q = query(usersCollectionRef, where('uid', '==', userId));

  getDocs(q)
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        // User document found
        querySnapshot.forEach((doc) => {
          const userDocRef = doc.ref;
          const userDocData = doc.data();
          const movieBookmarks = userDocData.movieBookmarks || [];

          // Check if the movieID already exists in the movieBookmarks array
          if (movieBookmarks.includes(movieID)) {
            throw new Error('Movie already bookmarked');
          }

          // Update the bookmarks array
          return updateDoc(userDocRef, { movieBookmarks: arrayUnion(movieID) });
        });
      } else {
        throw new Error('User document does not exist');
      }
    })
    .then(() => {
      alert('Bookmark added successfully');
    })
    .catch((error) => {
      if (error.message === 'Movie already bookmarked') {
        alert('Movie is already bookmarked');
      } else {
        alert('Error adding bookmark: ' + error);
      }
    });
}

async function displayBookmarkedMovies() {
  // load movie from API
  const apikey = 'c8ec4741';

  const userId = localStorage.getItem('userId');
  const bookmarkList = document.getElementById('bookmark-list');

  const usersCollectionRef = collection(db, 'users');
  const q = query(usersCollectionRef, where('uid', '==', userId));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // User document found
    const doc = querySnapshot.docs[0];
    const userDocData = doc.data();
    const movieBookmarks = userDocData.movieBookmarks || [];

    // Display each bookmarked movie
    for (const movieID of movieBookmarks) {
      try {
        const result = await fetch(`http://www.omdbapi.com/?i=${movieID}&page=1&apikey=${apikey}`);
        const movieDetails = await result.json();

        const movieListItem = document.createElement('div');
        movieListItem.classList.add('movie-card');

        movieListItem.innerHTML = `
          <div class="movie-card-thumbnail">
            <img class="popularPoster" src="${movieDetails.Poster != "N/A" ? movieDetails.Poster : "media/smiley.png"}">
          </div>
          <div class="movie-card-info">
            <h3>${movieDetails.Title}</h3>
            <p style="display:none">${movieDetails.imdbID}</p>
            <p>${movieDetails.Year}</p>
          </div>
        `;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove Bookmark';
        movieListItem.appendChild(removeButton);

        // Add remove button
        removeButton.addEventListener('click', (event) => {
          event.stopPropagation();

          // Get the movie ID associated with the remove button
          const movieID = movieDetails.imdbID;

          removeBookmark(movieID);
        });

        bookmarkList.appendChild(movieListItem);

        movieListItem.addEventListener('click', () => {
          displayMovieDetails(movieDetails);
        });
      } catch (error) {
        console.log('Error displaying bookmarked movie:', error);
      }
    }
  } else {
    console.log('User document does not exist');
  }
}

function displayMovieDetails(details) {
  const movieDetailsContainer = document.getElementById('movie-details');
  const backbutton = document.getElementById('back-button');
  movieDetailsContainer.classList.remove('hide-movie-details');
  backbutton.classList.remove('hide-back-button');
  bookmarkList.classList.add('hide-main-content');

  const html = `
    <div class="movie-poster">
      <img src="${details.Poster != 'N/A' ? details.Poster : 'media/smiley.png'}" alt="movie-poster">
    </div>
    <div class="movie-info">
      <h3 class="movie-id">${details.imdbID}</h3>
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

  movieDetailsContainer.innerHTML = html;

  backbutton.addEventListener('click', () => {
    backbutton.classList.add('hide-back-button');
    movieDetailsContainer.innerHTML = '';
    bookmarkList.classList.remove('hide-main-content');
  });
}

function removeBookmark(movieID) {
  const confirmed = confirm('Are you sure you want to remove this bookmark?');
  if (!confirmed) {
    return; // If not confirmed, exit the function
  }

  const usersCollectionRef = collection(db, 'users');
  const q = query(usersCollectionRef, where('uid', '==', userId));

  getDocs(q)
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const userDocRef = doc.ref;
          const userDocData = doc.data();
          const movieBookmarks = userDocData.movieBookmarks || [];

          if (movieBookmarks.includes(movieID)) {
            // Filter out the movieID from the movieBookmarks array
            const updatedBookmarks = movieBookmarks.filter((id) => id !== movieID);

            // Update the bookmarks array
            return updateDoc(userDocRef, { movieBookmarks: updatedBookmarks })
              .then(() => {
                alert('Bookmark removed successfully');
                location.reload();
              })
              .catch((error) => {
                alert('Error removing bookmark: ' + error);
              });
          } else {
            throw new Error('Movie is not bookmarked');
          }
        });
      } else {
        throw new Error('User document does not exist');
      }
    })
    .catch((error) => {
      if (error.message === 'Movie is not bookmarked') {
        alert('Movie is not bookmarked');
      } else {
        alert('Error removing bookmark: ' + error);
      }
    });
}
