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
    apiKey: "AIzaSyBr-WIsjApW7w45W7hMQ9jlMlAtRB5-A-g",
    authDomain: "it-platform-bd.firebaseapp.com",
    projectId: "it-platform-bd",
    storageBucket: "it-platform-bd.appspot.com",
    messagingSenderId: "1044586930262",
    appId: "1:1044586930262:web:bc5c309434703dbe6d5bf7"
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

