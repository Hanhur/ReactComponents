// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrpRI8U2m_jRlgYKWyFaTMMZLnWgPBHww",
    authDomain: "movies-project-ea080.firebaseapp.com",
    projectId: "movies-project-ea080",
    storageBucket: "movies-project-ea080.firebasestorage.app",
    messagingSenderId: "810229468563",
    appId: "1:810229468563:web:be875a7aba18c81bb12c66"
};

// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)

// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()

export { projectFirestore }