import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCnU64kPsB_9j7NGTnZHCpXg_X8U7Cvrdo",
  authDomain: "system-6791f.firebaseapp.com",
  projectId: "system-6791f",
  storageBucket: "system-6791f.appspot.com",
  messagingSenderId: "304505014210",
  appId: "1:304505014210:web:f599b0e59af4dd6dd2f85b",
  measurementId: "G-4TD6L1MFPG"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
const analytics = getAnalytics(app);






