import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAFkWvpc8I1vV9Um1R0rH0m6Joiof-xiSQ",
  authDomain: "crwn-db-611bb.firebaseapp.com",
  databaseURL: "https://crwn-db-611bb.firebaseio.com",
  projectId: "crwn-db-611bb",
  storageBucket: "crwn-db-611bb.appspot.com",
  messagingSenderId: "561216903213",
  appId: "1:561216903213:web:94426752ae7f7a09f400a4",
  measurementId: "G-PY6B3CTC7H",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdOn = Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdOn,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user: " + error);
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
