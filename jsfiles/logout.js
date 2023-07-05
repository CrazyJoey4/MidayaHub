// Import the functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHJxTqtydKNMc7kqg049fcg60Mluw_Zts",
    authDomain: "midayahub-db.firebaseapp.com",
    databaseURL: "https://midayahub-db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "midayahub-db",
    storageBucket: "midayahub-db.appspot.com",
    messagingSenderId: "800766212932",
    appId: "1:800766212932:web:cd0a1a0cf876cd76a67511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// For Sign Out
const signout = document.getElementById('signOut');

signout.addEventListener('click', () => {
    if (confirm("Are you sure you want to log out?")) {
        // User confirmed, proceed with logout
        auth.signOut()
            .then(() => {
                window.location.assign('index.php');
            })
            .catch(error => {
                console.error(error);
            });
    }
});