import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, collection, getDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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
const db = getFirestore();

window.displayProfile = function() {
    const user = auth.currentUser;
  
    if (user) {
      const userId = user.uid;
  
      const userDocRef = collection(db, "users", userId);
      getDoc(userDocRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            // Assuming you have HTML elements with the ids 'emailField' and 'usernameField'
            document.getElementById('email').innerText = userData.email;
            document.getElementById('username').innerText = userData.username;
          } else {
            // User document does not exist
            console.log("User document does not exist");
          }
        })
        .catch((error) => {
          console.log("Error fetching user profile:", error);
        });
    }
  }

// Profile function
// window.profile = function (event) {
//     event.preventDefault();

//     const user = auth.currentUser;

// function fetchUserProfile(uid) {
//     const userRef = doc(firestore, "users", uid);
    
//     getDoc(userRef)
//       .then((docSnapshot) => {
//         if (docSnapshot.exists()) {
//           const userData = docSnapshot.data();
//           const email = userData.email;
//           const username = userData.username;
          
//           // Display the user profile details on the page
//           document.getElementById('email').textContent = email;
//           document.getElementById('username').textContent = username;
//         }
//       })
//       .catch((error) => {
//         console.log("Error fetching user profile:", error);
//       });
// }
// }