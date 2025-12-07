import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCONyqnffS1e3K2mwcCwCj00M_oVlKaSi8",
  authDomain: "bmn-quick-guide.firebaseapp.com",
  projectId: "bmn-quick-guide",
  storageBucket: "bmn-quick-guide.firebasestorage.app",
  messagingSenderId: "212958050368",
  appId: "1:212958050368:web:ba9839558666795c6247a5",
  measurementId: "G-RMCS71SKSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);