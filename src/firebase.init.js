// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  //   apiKey: "AIzaSyDRB2OdlBFw8EMHl4EnuUHxpbm_O2vORnM",
  //   authDomain: "ctgbike-world.firebaseapp.com",
  //   projectId: "ctgbike-world",
  //   storageBucket: "ctgbike-world.appspot.com",
  //   messagingSenderId: "744894681655",
  //   appId: "1:744894681655:web:03ecc1e501e7e1837965b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
