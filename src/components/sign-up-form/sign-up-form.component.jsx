import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
import './sign-up-form.style.scss'

const formDefaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUpForm() {
    const [formFields, setFormFields] = useState(formDefaultFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(formDefaultFields)
    }

    const onHandleCHnage = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            console.log(user);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') { alert('email id already in use!') }
            console.log("User creation encountered and error: ", error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' onChange={onHandleCHnage} name='displayName' value={displayName} />
                <FormInput label='Email' type='email' onChange={onHandleCHnage} name='email' value={email} />
                <FormInput label='Password' type='password' onChange={onHandleCHnage} name='password' value={password} />
                <FormInput label='Confirm Password' type='password' onChange={onHandleCHnage} name='confirmPassword' value={confirmPassword} />
                <Button buttontype='inverted' type='submit' >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;