import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { TOKEN } from "../constant";

const firebaseConfig = {
  apiKey: "AIzaSyDuMCNpRJXs1cdAaQSgXv8Nv7o9ykJjB6U",
  authDomain: "parkx-22f01.firebaseapp.com",
  projectId: "parkx-22f01",
  storageBucket: "parkx-22f01.appspot.com",
  messagingSenderId: "286648231344",
  appId: "1:286648231344:web:a2a5d527b33d9a1e816275",
  measurementId: "G-9Y5B225T9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    // const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const collection_user = collection(db, "users");
    const q = query(collection_user, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const addUserDoc = async (userId, name, provider, email) => {
  await addDoc(collection(db, "users"), {
    uid: userId,
    name,
    authProvider: provider,
    email,
  });
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const refreshToken = async () => {
  const res = await auth.currentUser?.getIdToken(true);
  if (res) {
    TOKEN.setAccessToken(res);
    return res;
  }
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  logout,
  refreshToken,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
  addUserDoc,
};
