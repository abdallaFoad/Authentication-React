import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_API,

  apiKey: "AIzaSyAtaqeAa1PIrJT_EVqn2YifN8NP2LXDT7Y",
  authDomain: "authproject-a0188.firebaseapp.com",
  projectId: "authproject-a0188",
  storageBucket: "authproject-a0188.appspot.com",
  messagingSenderId: "490934759984",
  appId: "1:490934759984:web:f988fff2a0f0042c2933f5",
  measurementId: "G-WLXR51S62M",
};

const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);

export default auth;