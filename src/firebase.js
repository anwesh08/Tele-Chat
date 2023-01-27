import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoeUqszU0XYbSjCS9dkHbokursjyOVEpQ",
  authDomain: "chat-app-e9d78.firebaseapp.com",
  projectId: "chat-app-e9d78",
  storageBucket: "chat-app-e9d78.appspot.com",
  messagingSenderId: "386287725266",
  appId: "1:386287725266:web:0a04f67cad1915cb711b0b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();