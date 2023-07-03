// Import the functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

// Login function
window.login = function (event) {
  event.preventDefault();

  // Get the email and password fields
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');

  // Get the values from the fields
  const email = emailField.value;
  const password = passwordField.value;

  // Validate the email field
  if (email == "" || password == "") {
    alert('Please enter all field :]');
    return;
  }

  if (validate_email(email) == false) {
    alert('Please enter a valid email!');
    return;
  }

  // Validate the password field
  if (validate_password(password) == false) {
    alert('Please enter a valid password!');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(function (success) {      
      var uid = success.user.uid;
      console.log(uid);

      localStorage.setItem('userId', uid);

      window.location.replace('moviePage.php');
    })
    .catch(function (error) {
      // Firebase will use this to alert its errors
      var error_message = error.message;

      if (error.code == "auth/user-not-found") {
        alert("Login Error: User not found, please register :)");
      }
      else if (error.code == "auth/wrong-password") {
        alert("Login Error: Are you sure your password is correct entered? :O");
      } else {
        alert("Login Error: " + error_message);
      }
    });
}

// Validate Functions
function validate_email(email) {
  var expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is valid
    return true;
  } else {
    // Email is not valid
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}