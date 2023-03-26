// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALhd1ffu5qoIAChkTeoBW7yFcKf7vaR4g",
  authDomain: "netflix-clone-76851.firebaseapp.com",
  projectId: "netflix-clone-76851",
  storageBucket: "netflix-clone-76851.appspot.com",
  messagingSenderId: "35961719184",
  appId: "1:35961719184:web:9f76a57a91a4d18c7c0b15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signUp = async (e: any, email: string, password: string) => {
  e.preventDefault();
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  console.log(user);
};
export const signIn = async (
  e: any,
  email: string,
  password: string,
  errorState: any
) => {
  try {
    e.preventDefault();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error: any) {
    console.log(error.code);
    if (error.code == "auth/wrong-password") {
      errorState({
        state: true,
        strongContent: "Incorrect password.",
        Content: "Please try again or you can",
        ContentLink: "reset your password.",
      });
    } else if (error.code == "auth/user-not-found") {
      errorState({
        state: true,
        Content:
          "Sorry, we can't find an account with this email address. Please try again or",
        ContentLink: "create a new account.",
      });
    } else {
      errorState({
        state: false,
      });
    }
  }
};
