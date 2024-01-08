// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCDHrqWC6czDgr5mAZwaVfh7XcM7OM3j7c",
  authDomain: "react-netflix-clone-c7335.firebaseapp.com",
  projectId: "react-netflix-clone-c7335",
  storageBucket: "react-netflix-clone-c7335.appspot.com",
  messagingSenderId: "1084815298564",
  appId: "1:1084815298564:web:33b0b9e854e7390a98e551",
  measurementId: "G-Q5H9ERKJDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const firebaseAuth = getAuth(app);