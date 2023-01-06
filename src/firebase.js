import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.ADMIN_DASHBOARD_FIREBASE_KEY,
//   apiKey: "",
  authDomain: "admindashboard-a58d7.firebaseapp.com",
  projectId: "admindashboard-a58d7",
  storageBucket: "admindashboard-a58d7.appspot.com",
  messagingSenderId: "577339427433",
  appId: "1:577339427433:web:9526006e51e1d2d3ac70f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);