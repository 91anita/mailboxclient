import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAkHFCQccwn--jNVYyZKL4UleLhgQBeCLU",
  authDomain: "mailboxclient-4f3cf.firebaseapp.com",
  projectId: "mailboxclient-4f3cf",
  storageBucket: "mailboxclient-4f3cf.appspot.com",
  messagingSenderId: "211448024267",
  appId: "1:211448024267:web:dac7f0e5b3e2c5a9dd5f4e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {db, auth, provider};
