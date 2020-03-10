import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';


//import './SignupPage.css';

import TokenService from '../services/token-service'
//Need this to log in the user after signingup
import AuthApiService from '../services/auth-api-service'

class SignupPage extends React.Component{ 
        /* 
            ---------------------------------
            |            STATE              |
            ---------------------------------
        */
    constructor(props){
        super(props);
        this.state = {
            business_name: '',
            password: '',
            errorClass:'error hide',
            errorMessage: '',
        };
    }   



    //ERROR HANDLING

    clearError = () => {
        this.setState({
            errorClass:"error hide"
        });
    }

    showError = (message) => {
        this.setState({
            errorClass:"error",
            errorMessage: message
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log('Submitted')

        const {business_name, password } = this.state;

        AuthApiService.postUser({
            'user_name': business_name,
            'password': password,
        })
        .then( res => {
            console.log('signed UP');
            console.log(res)
            //AFTER successfully creating an account, make the call to log in
            AuthApiService.postLogin({
                business_name: business_name,
                password: password,
            })
            .then( res => {
                //user is signed up now

                //clear error
                this.clearError();

                console.log(res)
                // push to home page now that the user is logged in
                this.props.pushHome();
                // force a reload of state so that the home screen can now be displayed
                window.location.reload(false)
    
            })
            .catch(err => {
                console.log(err);
                this.showError('An error occurred while creating your account. Please reload the page');
            })
            
        })
        .catch(err => {
            console.log(err);
            //For example: when there no tables have been created, the error returned is an object, not a string
            if(typeof(err.error) === "string"){
                this.showError(err.error);
            }
            else{
                this.showError('An error occurred while creating your account. Please reload the page');
            }
        })
    }

    updateBusinessName = (val) => {
        this.setState(
            {business_name: val}
        );
    }

    updatePassword = (val) => {
        this.setState(
            {password: val}
        );
    }

    render(){

        

        return(
            
        <div className="page-container">
            <div className='alt-back'>
                <button className="alt-back-button" onClick={this.props.onClickBack}>&#x202D;&#10094;</button>
            </div>

            <header className='user-info-header'>
                <h1>Sign Up</h1>
            </header>

            <form className="user-info-form" onSubmit={e => this.handleSubmit(e)}>

                <section className="section-form">
                    <label htmlFor="business_name">Business Name:</label>
                    {/* Name INPUT */}
                    <input 
                        type="text"
                        className="name-box" 
                        name="business_name" 
                        id="business_name" 
                        value={this.state.business_name}
                        onChange={(e) => this.updateBusinessName(e.target.value)}
                    />
                </section>
                <section className="section-form">
                    <label htmlFor="password">Password:</label>
                    {/* Name INPUT */}
                    <input 
                        type="password"
                        className="name-box" 
                        name="password" 
                        id="password" 
                        value={this.state.password}
                        onChange={(e) => this.updatePassword(e.target.value)}
                    />
                </section>
                

                <button type='submit' className='submit'>Submit</button>

                <section className={this.state.errorClass}>
                    {console.log(this.state.errorClass)}
                    <p>{this.state.errorMessage}</p>
                </section>

            </form>

            
        </div>
        );
    }
}


export default SignupPage;