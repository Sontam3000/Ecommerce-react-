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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
