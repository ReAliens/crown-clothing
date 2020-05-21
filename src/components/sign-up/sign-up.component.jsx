import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import './sign-up.style.scss';
import { signupUser } from '../../redux/user/user.action';

const SignUp = (props) => {
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
            props.signupUser({ email, password, displayName });
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

const mapDispatchToProps = (dispatch) => ({
    signupUser: ({ email, password, displayName }) => dispatch(signupUser({ email, password, displayName })),
})

export default connect(null, mapDispatchToProps)(SignUp);