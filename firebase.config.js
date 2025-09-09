// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyALH06tdfDcNUYEOsvNkU_CRV0wgp5Rn1w",
  authDomain: "carbon-quest-5dad9.firebaseapp.com",
  databaseURL: "https://carbon-quest-5dad9-default-rtdb.firebaseio.com",
  projectId: "carbon-quest-5dad9",
  storageBucket: "carbon-quest-5dad9.firebasestorage.app",
  messagingSenderId: "156061302473",
  appId: "1:156061302473:web:2d5630dbf102e7d37fd718",
  measurementId: "G-SQ283FQRRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Exports
export const auth = getAuth(app);
export const db = getFirestore(app);
