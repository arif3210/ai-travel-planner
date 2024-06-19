// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCoc4d_mVGlqLLCd6l1p4euZssgdSMvFiQ",
  authDomain: "ai-travel-planner-f8e93.firebaseapp.com",
  projectId: "ai-travel-planner-f8e93",
  storageBucket: "ai-travel-planner-f8e93.appspot.com",
  messagingSenderId: "944018198295",
  appId: "1:944018198295:web:a45845dd20a98a10387152"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };