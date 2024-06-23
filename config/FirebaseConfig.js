

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduel.firebaseapp.com",
  projectId: "meeting-scheduel",
  storageBucket: "meeting-scheduel.appspot.com",
  messagingSenderId: "295320918541",
  appId: "1:295320918541:web:b933de96d6783e63431344",
  measurementId: "G-NSRKEE21EN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
