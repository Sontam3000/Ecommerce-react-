import firebase from 'firebase/app';
import 'firebase/firestore'; //for databse
import 'firebase/auth'; //for authentication

const config={
    apiKey: "AIzaSyD2jXMC8E_gM4t3FZxJyGH_IcUzKc0_oHE",
    authDomain: "crown-db-9419b.firebaseapp.com",
    projectId: "crown-db-9419b",
    storageBucket: "crown-db-9419b.appspot.com",
    messagingSenderId: "934166406735",
    appId: "1:934166406735:web:a9d7fbf1de79369640ec3a",
    measurementId: "G-0VLQ3QL5VW"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
