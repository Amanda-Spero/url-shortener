// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClC31HwgjOLcfM73bUARdK6vYJPwBjj88",
  authDomain: "url-shortener-a885f.firebaseapp.com",
  databaseURL: "https://url-shortener-a885f-default-rtdb.firebaseio.com",
  projectId: "url-shortener-a885f",
  storageBucket: "url-shortener-a885f.appspot.com",
  messagingSenderId: "819593426329",
  appId: "1:819593426329:web:a703882d12c979d69ccf08",
  measurementId: "G-X76T4423MV"
};

// Initialize 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)