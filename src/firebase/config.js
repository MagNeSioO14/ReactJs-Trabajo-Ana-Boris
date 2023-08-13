// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage , ref , uploadBytes, getDownloadURL  } from "firebase/storage";
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyCmIAdB2V4wCWr_0iuVE34wqUtWEybxIU8",
  authDomain: "react-trabajo-ana-boris.firebaseapp.com",
  projectId: "react-trabajo-ana-boris",
  storageBucket: "react-trabajo-ana-boris.appspot.com",
  messagingSenderId: "919237894448",
  appId: "1:919237894448:web:bfc462f379a48ba4f028f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app)

export async function subirArchivo(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}
