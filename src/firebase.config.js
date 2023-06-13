import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDOez2h3lVFTnOK7jqZzcJLo2Wmu5fix8o",
  authDomain: "maltimart-a24d9.firebaseapp.com",
  projectId: "maltimart-a24d9",
  storageBucket: "maltimart-a24d9.appspot.com",
  messagingSenderId: "48667218339",
  appId: "1:48667218339:web:dc3a2f7d717b04aadcca16",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyB4eywAl5HIXMY1kAQgs47oJW8UQ2aYNQ4",
//   authDomain: "maltimart-94830.firebaseapp.com",
//   projectId: "maltimart-94830",
//   storageBucket: "maltimart-94830.appspot.com",
//   messagingSenderId: "574344104582",
//   appId: "1:574344104582:web:82b7c5e3e8089690385f07"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)

export default app;
