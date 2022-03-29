import { Fragment } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <Fragment>
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser}> Sign In with Google Popup</button>
        </Fragment>
    )
}

export default SignIn;