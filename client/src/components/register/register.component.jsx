import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import './register.styles.scss';

class Register extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            
            //connect with mongodb
            //await createUser(user,displayName)
            
            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: '',               
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='register'>
                <h2 className='title'>I do not have an account</h2>
                <span>Register with your own email and password</span>
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type= 'text'
                        name= 'displayName'
                        value= {displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />       
                    <FormInput 
                        type= 'email'
                        name= 'email'
                        value= {email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type= 'password'
                        name= 'password'
                        value= {password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput 
                        type= 'password'
                        name= 'confirmPassword'
                        value= {confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>REGISTER</CustomButton>
                </form>
            </div>
        )
    }
}

export default Register;