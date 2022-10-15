import { initializeApp } from "firebase/app";
import {
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgToP3LaVWyMEVEWA7G6spWuPEl22qfhs",

  authDomain: "crwn-clothing-db-8822a.firebaseapp.com",

  projectId: "crwn-clothing-db-8822a",

  storageBucket: "crwn-clothing-db-8822a.appspot.com",

  messagingSenderId: "700889602685",

  appId: "1:700889602685:web:1df33404bc04985ac92f14",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
