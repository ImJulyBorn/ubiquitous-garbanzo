import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCbtGa-dYAJE7IVpOzhwLc5iuriO57rUc",
    authDomain: "e-library-bba5e.firebaseapp.com",
    projectId: "e-library-bba5e",
    storageBucket: "e-library-bba5e.appspot.com",
    messagingSenderId: "157991680300",
    appId: "1:157991680300:web:016ed72ba993c51d459489"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;