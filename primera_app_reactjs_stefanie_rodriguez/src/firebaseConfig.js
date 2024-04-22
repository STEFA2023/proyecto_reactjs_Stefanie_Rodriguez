
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5mCWfi6Sr2Dglo-GC87KrnbTU0AY3gB0",
    authDomain: "primera-app-reactjs-sr.firebaseapp.com",
    projectId: "primera-app-reactjs-sr",
    storageBucket: "primera-app-reactjs-sr.appspot.com",
    messagingSenderId: "656065687324",
    appId: "1:656065687324:web:f738da81e558aec55cd4d9"
};


const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export {database};