import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbl7RWUnWWkgEIjBD2NL3GFg-Lk7QjTYs",
  authDomain: "subshare-8f90f.firebaseapp.com",
  projectId: "subshare-8f90f",
  storageBucket: "subshare-8f90f.appspot.com",
  messagingSenderId: "686262319400",
  appId: "1:686262319400:web:f6f16974aec323daefb81d",
  measurementId: "G-LD73925W0M"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);