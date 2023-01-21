// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXZmBI2sDvMe-JQ-hpR7N-rCK61v1iMUw",
  authDomain: "weather-552f1.firebaseapp.com",
  projectId: "weather-552f1",
  storageBucket: "weather-552f1.appspot.com",
  messagingSenderId: "799343768180",
  appId: "1:799343768180:web:61d3608b7c814563399721",
  measurementId: "G-EEF0BGY06C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);