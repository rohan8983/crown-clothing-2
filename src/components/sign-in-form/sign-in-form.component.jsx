import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase.utils';
import './sign-in-form.style.scss'

const formDefaultFields = {
    email: '',
    password: '',
}

function SignInForm() {
    const [formFields, setFormFields] = useState(formDefaultFields);
    const { email, password } = formFields;

    // useEffect(() => {
    //     async function getResponse() {
    //         const res = await getRedirectResult(auth);
    //         const userDocRef = createUserDocumentFromAuth(res.user);
    //         console.log(res);
    //     }
    //     getResponse();
    // }, [])

    //Sign In With Google.
    async function signInWithGoogle() {
        const response = await signInWithGooglePopup();
        console.log(response);
        createUserDocumentFromAuth(response.user);
    }

    //reset all fields from state.
    const resetFormFields = () => {
        setFormFields(formDefaultFields)
    }

    //handle values on onChange.
    const onHandleCHnage = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    //submit form when user click on button
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    alert("Username/Password is incorrect");
                    break;
                default:
                    console.log(error);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' onChange={onHandleCHnage} name='email' value={email} />
                <FormInput label='Password' type='password' onChange={onHandleCHnage} name='password' value={password} />
                <div className="buttons-container">
                    <Button buttontype='inverted' type='submit' >Sign In</Button>
                    <Button type='button' buttontype='google' onClick={signInWithGoogle}>Google Login</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;