import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB9W1dTbBB8ObeRFtkS39afmrN73Q15R14",
  authDomain: "codesage-89cce.firebaseapp.com",
  projectId: "codesage-89cce",
  storageBucket: "codesage-89cce.firebasestorage.app",
  messagingSenderId: "1068614691611",
  appId: "1:1068614691611:web:24ee7b5235e10a273c81be",
  measurementId: "G-HF0X1P5Q07"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}




