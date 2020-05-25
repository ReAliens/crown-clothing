import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { loginUser } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import './sign-in.style.scss';

const SignIn = (props) => {
    const [userCredential, setCredential] = useState({ email: '', password: '' })
    const { email, password } = userCredential;
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            props.loginUser({email,password});
            setCredential({ email: '', password: '' });
        } catch (error) {
            console.log(error);
            alert('user name or password is not correct');
        };
        setCredential({ email: '', password: '' })
    }
    const handleChange = event => {
        const { value, name } = event.target;
        setCredential({ ...userCredential, [name]: value })
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with youe email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} required handleChange={handleChange} label="Email" />
                <FormInput type="password" name="password" value={password} required handleChange={handleChange} label="password" />
                <div className='buttons'>
                    <CustomButton type="submit">
                        Sign in
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSign >
                        Sign in with google
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loginUser: ({ email, password }) => dispatch(loginUser({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);