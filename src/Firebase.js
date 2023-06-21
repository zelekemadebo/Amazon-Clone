
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDHxsv13wKmUbgxlloPB0RgvqeI1PqxjlA',
  authDomain: 'aug-bc35b.firebaseapp.com',
  projectId: 'aug-bc35b',
  storageBucket: 'aug-bc35b.appspot.com',
  messagingSenderId: '616154326769',
  appId: '1:616154326769:web:3c81c98e82419c3236eb50',
  measurementId: 'G-TGYL74DGL3',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };






