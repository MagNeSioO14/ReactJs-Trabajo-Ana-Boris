// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmIAdB2V4wCWr_0iuVE34wqUtWEybxIU8",
  authDomain: "react-trabajo-ana-boris.firebaseapp.com",
  projectId: "react-trabajo-ana-boris",
  storageBucket: "react-trabajo-ana-boris.appspot.com",
  messagingSenderId: "919237894448",
  appId: "1:919237894448:web:bfc462f379a48ba4f028f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);