import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import {auth} from "./firebaseconfig.js"


const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const p = document.querySelector("#error")

form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value , p)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location = "login.html"
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    p.innerHTML = errorMessage

    
  });
})