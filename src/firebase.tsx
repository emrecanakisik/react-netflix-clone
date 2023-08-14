import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  serverTimestamp,
  get,
  set,
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyALhd1ffu5qoIAChkTeoBW7yFcKf7vaR4g",
  authDomain: "netflix-clone-76851.firebaseapp.com",
  projectId: "netflix-clone-76851",
  storageBucket: "netflix-clone-76851.appspot.com",
  messagingSenderId: "35961719184",
  appId: "1:35961719184:web:9f76a57a91a4d18c7c0b15",
  databaseURL:
    "https://netflix-clone-76851-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const auth = getAuth();

/* export const signUp = async (e: any, email: string, password: string) => {
  e.preventDefault();
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  console.log(user);
}; */

fetch("https://api64.ipify.org?format=json")
  .then((response) => response.json())
  .then((ipData) => sessionStorage.setItem("ipAddress", ipData.ip));

export const signIn = async (
  e: any,
  email: string,
  password: string,
  errorState: any,
  userData: any
) => {
  try {
    let mainData: any;
    e.preventDefault();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const dbRef = (filePath?: string) =>
      ref(database, `users/${user.uid}${filePath ? `/${filePath}` : ""}`);
    onValue(dbRef("sessionTimeAndIP"), (snapshot) => {
      mainData = snapshot.val();
      fetch("https://api64.ipify.org?format=json")
        .then((response) => response.json())
        .then((ipData) => {
          const ip = ipData.ip;
          let isIPMatch = false;
          mainData.forEach(
            (element: { IP: string; firstSessionTime: string }) => {
              if (element.IP === ip) {
                isIPMatch = true;
                onValue(dbRef(), (snapshot) => {
                  userData({ status: true, data: snapshot.val() });
                  localStorage.setItem("savedUser", user.uid);
                });
                console.log("success");
                return;
              }
            }
          );
          if (!isIPMatch) {
            set(dbRef("sessionTimeAndIP"), [
              ...mainData,
              { IP: ip, firstSessionTime: serverTimestamp() },
            ]);
            console.log("unsuccess");
          }
        });
    });
  } catch (error: any) {
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
    }
  }
};
