// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDG4PPAyLhdClm0J0qLxxCTjfrUvBeN54M",
  authDomain: "contact-app-a5908.firebaseapp.com",
  projectId: "contact-app-a5908",
  storageBucket: "contact-app-a5908.appspot.com",
  messagingSenderId: "1097726169107",
  appId: "1:1097726169107:web:876758e6c9021809116fe6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)