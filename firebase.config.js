// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOIkY6yBr3LpGN1lwesrwH092BvCVwWvI",
  authDomain: "apolleon-de63f.firebaseapp.com",
  projectId: "apolleon-de63f",
  storageBucket: "apolleon-de63f.appspot.com",
  messagingSenderId: "879880084439",
  appId: "1:879880084439:web:96a9dfe61a46f258710992",
  measurementId: "G-MELRPSBEBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
