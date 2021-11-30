import { initializeApp } from "firebase/app";

//Firebase configuration
/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyB3shDnXMT_rWOUVhXPWZQJKzks1mkupjQ",
  authDomain: "xiaomi-mobile-corner.firebaseapp.com",
  projectId: "xiaomi-mobile-corner",
  storageBucket: "xiaomi-mobile-corner.appspot.com",
  messagingSenderId: "375091744070",
  appId: "1:375091744070:web:119d1083970fcb5d60a947"
};

// Initialize Firebase
const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuthentication;
