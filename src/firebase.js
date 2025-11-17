import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWt3gMipU8P7u4qtXFMDb-mpzZcrOkivk",
  authDomain: "react-fb-router-tw-vite.firebaseapp.com",
  projectId: "react-fb-router-tw-vite",
  storageBucket: "react-fb-router-tw-vite.firebasestorage.app",
  messagingSenderId: "64185408912",
  appId: "1:64185408912:web:d2a9933996f7d1e0e1e715",
  measurementId: "G-XKSRCPT3Q5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export {auth}