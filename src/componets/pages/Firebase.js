// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN-ub6P71Ao_rvwnUNwwUZ34YqEVO6itQ",
  authDomain: "carrental-f8210.firebaseapp.com",
  projectId: "carrental-f8210",
  storageBucket: "carrental-f8210.appspot.com",
  messagingSenderId: "34704623129",
  appId: "1:34704623129:web:0a1da9b6fe2f8cbba1cc88",
  measurementId: "G-1XPGB7SHYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);