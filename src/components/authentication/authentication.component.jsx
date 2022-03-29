import { Fragment } from "react";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = () => {

    // When we signin using redirect, we will move to a new url and once the authentication is successful there we will be redirected back to our current page. Now the auth object will store the authentication details and since the component is remounted the useEffect will run and this is how we can get the authentication details.
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])

    return (
        <div className='authentication-container'>
            {/* <h2>Sign In Page</h2> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;