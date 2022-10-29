import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgToP3LaVWyMEVEWA7G6spWuPEl22qfhs",

  authDomain: "crwn-clothing-db-8822a.firebaseapp.com",

  projectId: "crwn-clothing-db-8822a",

  storageBucket: "crwn-clothing-db-8822a.appspot.com",

  messagingSenderId: "700889602685",

  appId: "1:700889602685:web:1df33404bc04985ac92f14",
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log("error: ", e.message);
    }
  }
  return userDocRef;
};
