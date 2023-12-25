import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZvlBQM-UAfcURYaGqitFjgPhuI3F1JkM",
    authDomain: "movies-project-2-2de1f.firebaseapp.com",
    projectId: "movies-project-2-2de1f",
    storageBucket: "movies-project-2-2de1f.appspot.com",
    messagingSenderId: "1044089183617",
    appId: "1:1044089183617:web:dcc8a72c5a6afff57f1c80"
}

// počáteční initializace
firebase.initializeApp(firebaseConfig);

// počáteční initilizace služeb
const projectFirestore = firebase.firestore();

export { projectFirestore }