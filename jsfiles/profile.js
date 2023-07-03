import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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
const db = getFirestore(app);

var userId = localStorage.getItem('userId');
document.getElementById('userId').textContent = userId;

window.displayProfile = function () {
    const usersCollectionRef = collection(db, 'users');
    const q = query(usersCollectionRef, where('uid', '==', userId));

    getDocs(q)
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                // User document found
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    document.getElementById('username').value = userData.username;
                    document.getElementById('email').value = userData.email;
                });
            } else {
                console.log('User document does not exist');
            }
        })
        .catch((error) => {
            console.log('Error fetching user profile:', error);
        });
}

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        const userId = user.uid;
        displayProfile(userId);
    } else {
        // User is not signed in, handle accordingly
        console.log('User is not signed in');
    }
});