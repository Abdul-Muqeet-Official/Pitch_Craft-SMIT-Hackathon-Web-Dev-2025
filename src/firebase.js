import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxfkZBLGUF2XxBxXQDD5YpjtKTWhiLJ-8",
  authDomain: "pitch-craft-bf67b.firebaseapp.com",
  projectId: "pitch-craft-bf67b",
  storageBucket: "pitch-craft-bf67b.firebasestorage.app",
  messagingSenderId: "1036570252289",
  appId: "1:1036570252289:web:9f7b97c48f283b73245c00"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app