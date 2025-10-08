// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcAf6MqTKulJKdtZD5RnaqTH9ChukjlEU",
  authDomain: "react-firebase-1c5d3.firebaseapp.com",
  databaseURL: "https://react-firebase-1c5d3-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-firebase-1c5d3",
  storageBucket: "react-firebase-1c5d3.firebasestorage.app",
  messagingSenderId: "927968210743",
  appId: "1:927968210743:web:5e4c6fa9233ee6830634b2",
  measurementId: "G-2R9HRWMVZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;