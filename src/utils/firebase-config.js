import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqSH0jgTJO4Vqr2YgRv6vO33UXV3Yz87o",
  authDomain: "allocate-5c3f4.firebaseapp.com",
  projectId: "allocate-5c3f4",
  storageBucket: "allocate-5c3f4.appspot.com",
  messagingSenderId: "925050547779",
  appId: "1:925050547779:web:ffffd8b0d1f5512e3eeef6"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);