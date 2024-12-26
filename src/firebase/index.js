import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQYUAkkCv_Ki5D9JxDeTp6Bs1FDqxhgR8",
  authDomain: "github-login-d69ed.firebaseapp.com",
  projectId: "github-login-d69ed",
  storageBucket: "github-login-d69ed.firebasestorage.app",
  messagingSenderId: "313404102786",
  appId: "1:313404102786:web:1d5c414cee1becaa87bc9b",
  measurementId: "G-ES9G3BZBV8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GithubAuthProvider();

export { auth, provider };
