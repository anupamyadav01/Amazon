// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACnX2r9NJddSvXKUWg6n9xCs2JCCt2BF8",
  authDomain: "fir-2144a.firebaseapp.com",
  projectId: "fir-2144a",
  storageBucket: "fir-2144a.appspot.com",
  messagingSenderId: "157052564375",
  appId: "1:157052564375:web:127fb7de953d06007d8ad2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
