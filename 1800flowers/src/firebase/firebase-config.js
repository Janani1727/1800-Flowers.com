// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbnrJ_aIOL2CwSM3kI85--R2K31zHFY0w",
  authDomain: "blossom-auth-setup.firebaseapp.com",
  projectId: "blossom-auth-setup",
  storageBucket: "blossom-auth-setup.appspot.com",
  messagingSenderId: "602705058895",
  appId: "1:602705058895:web:89263d31c1121c20cf9e3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
