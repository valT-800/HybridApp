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
  apiKey: "AIzaSyDuYDGZZCjQjkfA8f3yx_S20AW6xPkLSrA",
  authDomain: "store-5b5df.firebaseapp.com",
  databaseURL: "https://store-5b5df-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "store-5b5df",
  storageBucket: "store-5b5df.appspot.com",
  messagingSenderId: "163924804722",
  appId: "1:163924804722:web:fe68e247b672b2d35c2eeb",
  measurementId: "G-9XZTRE6RC2"
};
// Initialize Firebase

app.initializeApp(firebaseConfig);

export default app