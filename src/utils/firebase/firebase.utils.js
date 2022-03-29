import { initializeApp } from 'firebase/app';
import {
        getAuth,
         signInWithRedirect,
         signInWithPopup,
         GoogleAuthProvider,
         ProviderId
       } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }
    return userDocRef;
}