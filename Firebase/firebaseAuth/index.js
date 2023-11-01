console.log("Hello Rafay Memon");

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBJT7aw3gPj8aHQviqgwpe9Vz1Samvx4qE",
  authDomain: "fir-practice-v10.firebaseapp.com",
  projectId: "fir-practice-v10",
  storageBucket: "fir-practice-v10.appspot.com",
  messagingSenderId: "513463355725",
  appId: "1:513463355725:web:a560ef8d8f74f102808f04",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// call the getAuth() function to get an instance of the authentication service.

const auth = getAuth(app);

// call the getDatabase() function to get an instance of the database service.
const db = getDatabase();

let registerButton = document.getElementById("register_button");

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  console.log(email);
  let password = document.getElementById("password").value;
  console.log(password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      set(ref(db, `users/${user.uid}`),{
        email: email,
        password: password
      })

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error==> ", errorMessage);
      // ..
    });
});

let login_button = document.getElementById("login_button");
login_button.addEventListener("click", (e) => {
  e.preventDefault();
  let loginEmail = document.getElementById("login_email").value;
  let loginPassword = document.getElementById("login_password").value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      onValue(ref(db, `users/${user.uid}`), (data)=>{
        console.log(data.val());
        
      
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("loginError==> ", errorMessage);
    });
});
