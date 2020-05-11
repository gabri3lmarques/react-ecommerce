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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    console.log("nao tem user");
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toLocaleDateString("pt-BR");
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("deu ruim");
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
