import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, getDocs, doc, collection, getDoc, addDoc, setDoc  } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBN1Sh3Q0kziKq-5pXkgF8r8E4TlruETn4",
    authDomain: "searove-42e35.firebaseapp.com",
    projectId: "searove-42e35",
    storageBucket: "searove-42e35.appspot.com",
    messagingSenderId: "25919612729",
    appId: "1:25919612729:web:67a939051a3cd49e8ceae8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const popUp = () => signInWithPopup(auth, provider)

const fire = { initializeApp };
export default fire;