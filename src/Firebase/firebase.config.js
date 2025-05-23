
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoifq4wyVjDLK1Tvxd7KP7r7NhLh1yKAU",
  authDomain: "coupon-collecting--proje-f8280.firebaseapp.com",
  projectId: "coupon-collecting--proje-f8280",
  storageBucket: "coupon-collecting--proje-f8280.firebasestorage.app",
  messagingSenderId: "342239864950",
  appId: "1:342239864950:web:7cca0f3c34f0d278ffd757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);