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

// Get the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Sign Up function
window.register = function (formData) {
  event.preventDefault();

  // Get the form data from the URL query parameters
  const emailField = document.getElementById('email');
  const usernameField = document.getElementById('username');
  const passwordField = document.getElementById('password');
  const confirmField = document.getElementById('confirmpass');

  const email = emailField.value;
  const username = usernameField.value;
  const password = passwordField.value;
  const confirm = confirmField.value;

  // Validate the fields
  if (email === "" || password === "" || confirm === "") {
    alert('Please enter all fields.');
    return;
  }

  if (validate_email(email) === false) {
    alert('Please enter a valid email!');
    return;
  }

  if (validate_password(password) === false) {
    alert('Please enter a valid password!');
    return;
  }

  if (validate_confirm(password, confirm) === false) {
    alert('Password and confirm password do not match!');
    return;
  }

  const obj = {
    username: username,
    email: email,
    password: password,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      window.location.replace('index.php');
      alert("Congrats, Welcome to MidayaHub!");
    })
    .catch(function (error) {
      var error_message = error.message;

      if (error.code == "auth/email-already-in-use") {
        alert("Login Error: This email is already registered, please use another email.");
      }
      else if (error.code == "auth/weak-password") {
        alert("Login Error: Your password is too weak to protect your account.");
      } else {
        alert("Login Error: " + error_message);
      }
    });
}

// Validate Functions
function validate_email(email) {
  var expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  return password.length >= 6;
}

function validate_confirm(password, confirm) {
  return password === confirm;
}