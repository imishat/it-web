// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app

//src/firebase.js
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDj-1y6kCTYY_JoFk3hkpsyC0Ky2Fkd3B0",
    authDomain: "it-platform-b8763.firebaseapp.com",
    projectId: "it-platform-b8763",
    storageBucket: "it-platform-b8763.appspot.com",
    messagingSenderId: "299260365710",
    appId: "1:299260365710:web:fc11160e5e9ef8e4c472df"
  };
initializeApp(firebaseConfig);

//init services
const auth = getAuth();
const app = initializeApp(firebaseConfig);

export {
    app, auth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
};

