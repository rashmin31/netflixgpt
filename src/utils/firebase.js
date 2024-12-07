// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH_nfeCZ4f2iO-uKK9sYWBkMcRWNqreT4",
  authDomain: "netflixgpt-3287f.firebaseapp.com",
  projectId: "netflixgpt-3287f",
  storageBucket: "netflixgpt-3287f.firebasestorage.app",
  messagingSenderId: "671063430441",
  appId: "1:671063430441:web:9ee3151e88c7647b5b1338",
  measurementId: "G-TY8827JK7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();