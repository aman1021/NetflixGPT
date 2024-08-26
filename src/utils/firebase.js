// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYGIyJtup4bU9VKvlW35gwMcMVVMpVP18",
  authDomain: "netflixgpt-3817b.firebaseapp.com",
  projectId: "netflixgpt-3817b",
  storageBucket: "netflixgpt-3817b.appspot.com",
  messagingSenderId: "431635780284",
  appId: "1:431635780284:web:d09a658b756bd15b99b6b9",
  measurementId: "G-6BSZTVT544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();