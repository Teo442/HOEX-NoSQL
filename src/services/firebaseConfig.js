// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp_uni5bl0DQZ8lgkl6T42lTcDHsrW3D4",
  authDomain: "bd-pedro.firebaseapp.com",
  projectId: "bd-pedro",
  storageBucket: "bd-pedro.appspot.com",
  messagingSenderId: "316535786854",
  appId: "1:316535786854:web:4c5c1257e6d4000c5e8ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);