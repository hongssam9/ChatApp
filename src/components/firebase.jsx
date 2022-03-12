import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApYiAGcTEKbEWN0XQD2R6Do2soa0NrCWE",
    authDomain: "chatapp-248ee.firebaseapp.com",
    projectId: "chatapp-248ee",
    storageBucket: "chatapp-248ee.appspot.com",
    messagingSenderId: "1049909163787",
    appId: "1:1049909163787:web:627f244634040c23be140e",
    measurementId: "G-14BY1PK4Z5"
  };

  const firebaseApp = firebase.initializeApp
(firebaseConfig)
const db = firebaseApp.firestore(); 
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;