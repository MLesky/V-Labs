// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK5RV3ZQJ2dd3_HhZQs83VlktVbRsd4Dg",
  authDomain: "v-labs-b023b.firebaseapp.com",
  projectId: "v-labs-b023b",
  storageBucket: "v-labs-b023b.appspot.com",
  messagingSenderId: "275150662573",
  appId: "1:275150662573:web:7f46451208165e1a810f24",
  measurementId: "G-WJCQZW3T6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


