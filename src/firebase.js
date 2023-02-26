
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_N6hY6zJlucKX2EDKC5hNWejkidIwHkI",
  authDomain: "flyskylerforum.firebaseapp.com",
  projectId: "flyskylerforum",
  storageBucket: "flyskylerforum.appspot.com",
  messagingSenderId: "329093813413",
  appId: "1:329093813413:web:a13ea734df263a65f0294c"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const postsCollectionRef = collection(db, 'posts');
const storage = getStorage(app);
export default postsCollectionRef;
export {storage}






