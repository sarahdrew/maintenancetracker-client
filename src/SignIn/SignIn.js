import React, { Component } from 'react'
import TokenService from '../services/token-service'
import AuthApiService from '../../src/services/auth-api-service';

export default class SignIn extends Component {
    static defaultProps = {
        onSigninSuccess: () => { },
        isSignedIn: false,
    }

    state = { error: null }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { email, password } = ev.target
        TokenService.saveAuthToken(TokenService.makeBasicAuthToken(email.value, password.value))

        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            .then(user => {
                email.value = ''
                password.value = ''
                if (user.hasOwnProperty('error')) {
                    this.setState({ error: user.error });
                } else {
                    this.props.onSigninSuccess()

                    this.setState({ isSignedIn: true })
                    this.props.history.push(`/signed-in`)
                }

            })
            .catch(res => {

            })

    }

    render() {
        const { error } = this.state
        return (
            <>
                <div className="demo-explanation">
                    <p>For a demo, use the following credentials:</p>
                    <p>email: demo@maintenancetracker.com</p>
                    <p>Password: Demo123!</p>
                    <p>Otherwise, sign in with your registered information.</p>
                </div>
                <form
                    className='SigninForm'
                    onSubmit={this.handleSubmitBasicAuth}
                >
                    <div className="alert " role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div className='email'>
                        <label htmlFor='SigninForm__email'>
                            Email
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
