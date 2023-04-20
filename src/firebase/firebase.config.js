// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWQ2sbakTHeOFHSYpvEJMejJn5g1FsSig",
  authDomain: "burj-al-khalifa-hotel.firebaseapp.com",
  projectId: "burj-al-khalifa-hotel",
  storageBucket: "burj-al-khalifa-hotel.appspot.com",
  messagingSenderId: "67846282162",
  appId: "1:67846282162:web:b3ee001b6ae9f5c0eb62ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;