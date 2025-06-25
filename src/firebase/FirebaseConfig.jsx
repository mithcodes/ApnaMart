// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import {getFirestore} from "firebase/firestore"
// import { getAuth } from "firebase/auth";
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBL5bwvsUEDZ5l-TTS-TkTOJt6TWlA6vd4",
//   authDomain: "apnamart-e4764.firebaseapp.com",
//   projectId: "apnamart-e4764",
//   storageBucket: "apnamart-e4764.firebasestorage.app",
//   messagingSenderId: "977367776328",
//   appId: "1:977367776328:web:374fa77761928320a22c7d",
//   measurementId: "G-VY5HLT9W4C"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const fireDB=getFirestore(app);
// const auth=getAuth(app);

// export {fireDB, auth} 

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ Add this
import { getAuth } from "firebase/auth"; // ✅ Add this
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_kpjXbbWbpQERKZL7nnExW_Xxf_cRnBQ",
  authDomain: "apnamart-94225.firebaseapp.com",
  projectId: "apnamart-94225",
  storageBucket: "apnamart-94225.firebasestorage.app",
  messagingSenderId: "952841307762",
  appId: "1:952841307762:web:e0ded79f2ac4917f89e4eb",
  measurementId: "G-KSGX7QE42P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB=getFirestore(app);
const auth=getAuth(app);

export {fireDB, auth} 