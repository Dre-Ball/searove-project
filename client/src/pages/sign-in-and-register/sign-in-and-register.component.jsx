import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';

import './sign-in-and-register.styles.scss';

const SignInAndRegister = () => (
    <div className='sign-in-and-register'>
        <SignIn />
        <Register />
    </div>
);

export default SignInAndRegister;