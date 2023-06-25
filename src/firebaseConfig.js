// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword,getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdvUTTTBCH9952FJmh6ifwUToONZjSajk",
  authDomain: "cre8team-67300.firebaseapp.com",
  projectId: "cre8team-67300",
  storageBucket: "cre8team-67300.appspot.com",
  messagingSenderId: "734910370528",
  appId: "1:734910370528:web:bfa555137e108feb223685"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);