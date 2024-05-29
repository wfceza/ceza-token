import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxdj3_BblZl1D7_9cbnWaqr6SFSyWziNs",
  authDomain: "ceza-token.firebaseapp.com",
  projectId: "ceza-token",
  storageBucket: "ceza-token.appspot.com",
  messagingSenderId: "554278573442",
  appId: "1:554278573442:web:e5f4e463effa454dbaab9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);