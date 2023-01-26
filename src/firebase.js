import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMzOEzEjci_ozZtBPEXWVUtirx_I3C6MQ",
  authDomain: "tele-chat-ba92a.firebaseapp.com",
  projectId: "tele-chat-ba92a",
  storageBucket: "tele-chat-ba92a.appspot.com",
  messagingSenderId: "39263682339",
  appId: "1:39263682339:web:1e45ed975a05d96771d696",
  measurementId: "G-4C8Q04Y3EM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()