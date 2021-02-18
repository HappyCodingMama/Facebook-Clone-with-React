import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqNyAzlVO0wrYDRE609WpNVTz_ibcKUHE",
  authDomain: "facebook-clone-33cf4.firebaseapp.com",
  projectId: "facebook-clone-33cf4",
  storageBucket: "facebook-clone-33cf4.appspot.com",
  messagingSenderId: "290283722189",
  appId: "1:290283722189:web:432abec236f0ee00806084",
  measurementId: "G-CLC5YGRL8P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
