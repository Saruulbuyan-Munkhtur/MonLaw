import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBYuRC8bjeNykDdr4iY4NTzAkDHaLYArSI",
  authDomain: "monlaw-aa8ae.firebaseapp.com",
  databaseURL: "https://monlaw-aa8ae.firebaseio.com",
  projectId: "monlaw-aa8ae",
  storageBucket: "monlaw-aa8ae.appspot.com",
  messagingSenderId: "550370205125",
  appId: "1:550370205125:web:6819c0265588ba805c3fac",
  measurementId: "G-ZVJCX5MES2"
};

firebase.initializeApp(config);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'consent' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// Import the bottom to use a google signin popup
//import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

// Import the bottom to use a google signup popup
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

