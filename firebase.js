import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0dE_fOr_AnImAn_60a9e_wEb_ApP",
  authDomain: "animan-60a9e.firebaseapp.com",
  projectId: "animan-60a9e",
  storageBucket: "animan-60a9e.appspot.com",
  messagingSenderId: "500309932012",
  appId: "1:500309932012:web:somegeneratedhexvalue",
  measurementId: "G-497671432"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, signInWithPopup, db, storage };
