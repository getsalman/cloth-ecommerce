import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAVRFoqXf1g5lsiu73Hw3va-lXZ5jFrIXU",
  authDomain: "cloth-db-59f15.firebaseapp.com",
  projectId: "cloth-db-59f15",
  storageBucket: "cloth-db-59f15.appspot.com",
  messagingSenderId: "622118614193",
  appId: "1:622118614193:web:15db705c61bbb34e69de90",
  measurementId: "G-6G9ETBJSL7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
