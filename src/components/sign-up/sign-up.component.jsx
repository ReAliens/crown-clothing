import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.style.scss';

const SignUp = () => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords don't matches");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            setCredentials({
                ...userCredentials,
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }

    };
    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }
    return (
        <div className='sign-up'>
            <h2 className='title'>I don't have account</h2>
            <span>Sign up with your Email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='DisplayName' required />
                <FormInput type='text' name='email' value={email} onChange={handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
                <FormInput type='Password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='confirm password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}
export default SignUp;