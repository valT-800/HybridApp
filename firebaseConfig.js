import app from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvv3lG7ZQM0Zto_jIG8FPr6JoC1m1b6NU",
  authDomain: "thirdtask-d55cc.firebaseapp.com",
  databaseURL: "https://thirdtask-d55cc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thirdtask-d55cc",
  storageBucket: "thirdtask-d55cc.appspot.com",
  messagingSenderId: "884835431450",
  appId: "1:884835431450:web:f61450c414ac251e1ccda3",
  measurementId: "G-FJE1G2VP1M"
};
// Initialize Firebase

app.initializeApp(firebaseConfig);

export default app