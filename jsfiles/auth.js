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

checkLoggedIn();

// Check if the user is logged in
function checkLoggedIn() {
    var userId = localStorage.getItem('userId');
    console.log(userId);
    if (!userId) {
        // User is not logged in, redirect to login page or perform other actions
        auth.signOut()
            .then(() => {
                window.location.assign('index.php');
            })
            .catch(error => {
                console.error(error);
            });
    }
}