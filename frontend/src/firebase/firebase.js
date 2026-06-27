import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDHcrdqYrPSHo9DxXDPFYHPcYXB_D6NSA",
  authDomain: "taskpilotai-8bd9d.firebaseapp.com",
  projectId: "taskpilotai-8bd9d",
  storageBucket: "taskpilotai-8bd9d.firebasestorage.app",
  messagingSenderId: "625606863042",
  appId: "1:625606863042:web:ab34d5e18675abd6f7335b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();