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

// Retrieve user ID
let userId = localStorage.getItem('userId');

// Function to add news ID to user's bookmarks array
function addBookmarkToUser(userRef, newsId, newsTitle) {
  updateDoc(userRef, { bookmarks: arrayUnion(newsId) })
    .then(() => {
      console.log('News bookmarked successfully');
    })
    .catch((error) => {
      console.error('Error adding news bookmark:', error);
    });
}

// Function to remove news ID from user's bookmarks array
function removeBookmarkFromUser(userRef, newsId) {
  updateDoc(userRef, { bookmarks: arrayRemove(newsId) })
    .then(() => {
      console.log('News bookmark removed successfully');
    })
    .catch((error) => {
      console.error('Error removing news bookmark:', error);
    });
}

// Add event listeners to bookmark buttons
const bookmarkButtons = document.querySelectorAll('.bookmark-button');
bookmarkButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const newsId = `news-${index}`;
    const newsTitle = details[index].title;
    toggleBookmark(newsId, newsTitle);
  });
});