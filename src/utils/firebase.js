// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// }


const FIREBASE_API_KEY = import.meta.env.VITE_REACT_FIREBASE_API_KEY
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_REACT_FIREBASE_AUTH_DOMAIN
const FIREBASE_PROJECT_ID = import.meta.env.VITE_REACT_FIREBASE_PROJECT_ID
const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_REACT_FIREBASE_STORAGE_BUCKET
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID
const FIREBASE_APP_ID = import.meta.env.VITE_REACT_FIREBASE_APP_ID
const FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_REACT_FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();