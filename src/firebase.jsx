// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBk5awS6xV3jSqqm4QlM4OeCMe0CVqZpm8",
    authDomain: "disneyplus-clone-b3af8.firebaseapp.com",
    projectId: "disneyplus-clone-b3af8",
    storageBucket: "disneyplus-clone-b3af8.appspot.com",
    messagingSenderId: "682679935135",
    appId: "1:682679935135:web:043847370b6ccabdb982aa",
    measurementId: "G-KK5FJ91XHM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;