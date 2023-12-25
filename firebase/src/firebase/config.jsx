import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzVQRMXd1f9Z0deMnzjU2-zBsiwOew_Yg",
    authDomain: "movies-project-ea080.firebaseapp.com",
    projectId: "movies-project-ea080",
    storageBucket: "movies-project-ea080.appspot.com",
    messagingSenderId: "810229468563",
    appId: "1:810229468563:web:9ae6732bd354931ab12c66"
}

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export {
    projectFirestore
}