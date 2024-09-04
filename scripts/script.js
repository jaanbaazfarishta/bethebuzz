// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTldF4fyvakL29Z_Id7zPL8-GlhnxcgDg",
  authDomain: "bethebuzz-f7fc0.firebaseapp.com",
  projectId: "bethebuzz-f7fc0",
  storageBucket: "bethebuzz-f7fc0.appspot.com",
  messagingSenderId: "558902810601",
  appId: "1:558902810601:web:a01fd8be6aa4ea4d76dd78",
  measurementId: "G-8T9Y4ZNTZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);