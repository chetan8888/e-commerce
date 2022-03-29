import { Fragment } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    // When we signin using redirect, we will move to a new url and once the authentication is successful there we will be redirected back to our current page. Now the auth object will store the authentication details and since the component is remounted the useEffect will run and this is how we can get the authentication details.
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])


    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <Fragment>
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser}> Sign In with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}> Sign In with Google redirect</button> */}
        </Fragment>
    )
}

export default SignIn;