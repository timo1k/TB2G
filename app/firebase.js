// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, FirebaseFirestore } from "@firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPAeacPhC7qMGjZ5vWMZwULTfvBku9LGU",
  authDomain: "poop-5f5e4.firebaseapp.com",
  projectId: "poop-5f5e4",
  storageBucket: "poop-5f5e4.appspot.com",
  messagingSenderId: "272629397766",
  appId: "1:272629397766:web:29a4352fc74aef61a90687",
  measurementId: "G-4WC96279Q2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

// Database
const db = getFirestore(app);

// Get storage
const storage = getStorage(app);

export { firestore, auth, db, storage };
