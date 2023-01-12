// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEFeN_ftuNJSr66UbcF-5bbTHEl9RMMts",
  authDomain: "projecttracker-11fe0.firebaseapp.com",
  projectId: "projecttracker-11fe0",
  storageBucket: "projecttracker-11fe0.appspot.com",
  messagingSenderId: "316838475960",
  appId: "1:316838475960:web:18dccdac31c4dc11b91c4d",
  measurementId: "G-RR7EELM0KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);






