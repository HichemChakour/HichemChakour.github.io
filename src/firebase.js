import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoalRkhskefF9Jl7KLy03k5P11Gt_xHdo",
  authDomain: "portofolio-1da04.firebaseapp.com",
  projectId: "portofolio-1da04",
  storageBucket: "portofolio-1da04.firebasestorage.app",
  messagingSenderId: "259009353397",
  appId: "1:259009353397:web:26ea340cf998281fd4d0fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };