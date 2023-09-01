// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0HgGrfjf69Ydjg94JdwaEQdYjFxUqFec",
  authDomain: "insta-25380.firebaseapp.com",
  projectId: "insta-25380",
  storageBucket: "insta-25380.appspot.com",
  messagingSenderId: "653730167143",
  appId: "1:653730167143:web:2c0399043ec342642b17c2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth= firebase.auth();

const firestore=firebase.firestore();

export const database={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    comments:firestore.collection('comments'),
    getTimeStamp:firebase.firestore.FieldValue.serverTimestamp,
}

export const storage=firebase.storage();