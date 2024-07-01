// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-cffca.firebaseapp.com",
  projectId: "real-estate-cffca",
  storageBucket: "real-estate-cffca.appspot.com",
  messagingSenderId: "1028281877338",
  appId: "1:1028281877338:web:c857977d99e93b42122963"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);