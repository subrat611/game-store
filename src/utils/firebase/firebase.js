import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const {
  VITE_FIREBASE_API_KEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createUserWithEmail = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
