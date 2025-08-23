// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB8rBLAcJ0djGUe2KyeYjMy_bZScwkH3E",
  authDomain: "one93visasoverseas.firebaseapp.com",
  projectId: "one93visasoverseas",
  storageBucket: "one93visasoverseas.firebasestorage.app",
  messagingSenderId: "833105203324",
  appId: "1:833105203324:web:419e08d58bbb7cb15379f9",
  measurementId: "G-0W1HPX6H3T"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
