// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWzbjqI1aHidNS0XOimVOMPlIajXhWpNg",
  authDomain: "nexa-haven.firebaseapp.com",
  projectId: "nexa-haven",
  storageBucket: "nexa-haven.firebasestorage.app",
  messagingSenderId: "763514299051",
  appId: "1:763514299051:web:3982455bf0c3a845ab0dee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;