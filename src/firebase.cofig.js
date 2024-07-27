// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCer5mpfzEmKouqozoJrs75ucpBVKSsfu8",
  authDomain: "ecommerce-8d6ed.firebaseapp.com",
  projectId: "ecommerce-8d6ed",
  storageBucket: "ecommerce-8d6ed.appspot.com",
  messagingSenderId: "156304040428",
  appId: "1:156304040428:web:eb9ec9412ae07ec164a0c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app);
export default auth;
