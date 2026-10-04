
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "interview-9f17b.firebaseapp.com",
  projectId: "interview-9f17b",
  storageBucket: "interview-9f17b.firebasestorage.app",
  messagingSenderId: "206413341593",
  appId: "1:206413341593:web:9059a1f64410af8d946908"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}