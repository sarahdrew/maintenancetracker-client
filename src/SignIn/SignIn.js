import React, { Component } from 'react'
//import TokenService from '../services/token-service'
//import { Button, Input } from '../Utils/Utils';
//import AuthApiService from '../../src/services/auth-api-service';

export default class LoginForm extends Component {
    static defaultProps = {
        onSigninSuccess: () => { }
    }

    state = { error: null }

    // handleSubmitBasicAuth = ev => {
    //     ev.preventDefault()
    //     const { user_name, password } = ev.target
    //     // not needed: TokenService.saveAuthToken(TokenService.makeBasicAuthToken(user_name.value, password.value))

    //     AuthApiService.postLogin({
    //         user_name: user_name.value,
    //         password: password.value
    //     })
    //         .then(user => {

    //             user_name.value = ''
    //             password.value = ''
    //             this.props.onSigninSuccess()
    //             this.props.history.push(`/signed-in`)
    //         })
    //         .catch(res => {
    //             this.setState({ error: res.error })
    //         })

    // }

    render() {
        const { error } = this.state
        return (
            <>
                <div className="demo-explanation">
                    <p>For a demo, use the following credentials:</p>
                    <p>email: demo@maintenancetracker.com</p>
                    <p>Password: Demo123!</p>
                </div>
                <form
                    className='SigninForm'
                // onSubmit={this.handleSubmitBasicAuth}
                >
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div className='email'>
                        <label htmlFor='SigninForm__email'>
                            email
          </label>
                        <input
                            type="text"
                            required name='email' id='SigninForm__email' />

                    </div>
                    <div className='password'>
                        <label htmlFor='SigninForm__password'>
                            Password
          </label>
                        <input
                            required name='password' type='password' id='SigninForm__password' />

                    </div>
                    <button type="submit">Sign In</button>

                </form>
            </>



        )
    }
}
