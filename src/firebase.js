import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCeuEOoCCnr_IikrbyGKz0ZJt0p4iBegc",
  authDomain: "chat-2-889bd.firebaseapp.com",
  projectId: "chat-2-889bd",
  storageBucket: "chat-2-889bd.appspot.com",
  messagingSenderId: "883021076068",
  appId: "1:883021076068:web:3297d2efe0177d9b2fb171",
  measurementId: "G-CF4JMEV73N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();