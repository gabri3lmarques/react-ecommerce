import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_nxvVus56dYYsvDaFqnDpzBo4elCF2xg",
  authDomain: "ecommerce-db-f4783.firebaseapp.com",
  databaseURL: "https://ecommerce-db-f4783.firebaseio.com",
  projectId: "ecommerce-db-f4783",
  storageBucket: "ecommerce-db-f4783.appspot.com",
  messagingSenderId: "284955481891",
  appId: "1:284955481891:web:3cea3e7a9cd80f22681e96",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
