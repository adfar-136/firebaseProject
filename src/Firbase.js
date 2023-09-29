// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCO5fQd5JoYwnKi3Jl3jhPAeXaYKE7QTio",
  authDomain: "nov22-6a61a.firebaseapp.com",
  projectId: "nov22-6a61a",
  storageBucket: "nov22-6a61a.appspot.com",
  messagingSenderId: "637709019795",
  appId: "1:637709019795:web:359e75a3b8d5fc3a517b66",
  measurementId: "G-K0E7T875YL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}