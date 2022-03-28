import { initializeApp } from 'firebase/app';
import {
        getAuth,
         signInWithRedirect,
         signInWithPopup,
         GoogleAuthProvider,
         ProviderId
       } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4g7YUIk7vvnbMWA0jh6UOK-VbcsFToJE",
    authDomain: "ecommerce-db-c7bea.firebaseapp.com",
    projectId: "ecommerce-db-c7bea",
    storageBucket: "ecommerce-db-c7bea.appspot.com",
    messagingSenderId: "150114163217",
    appId: "1:150114163217:web:938d96467034fb5589efb0"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);