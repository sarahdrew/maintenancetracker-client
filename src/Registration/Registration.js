import React, { Component } from 'react'
//import { Button, Input, Required } from '../Utils/Utils';
import AuthApiService from '../../src/services/auth-api-service';
//import './RegistrationForm.css'

export default class Registration extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = event => {
        console.log(`handling the submit for registration`)
        event.preventDefault()
        const { full_name, email, password } = event.target

        this.setState({ error: null })
        AuthApiService.postUser({
            email: email.value,
            password: password.value,
            full_name: full_name.value,
        })
            .then(user => {
                full_name.value = ''
                email.value = ''
                password.value = ''
                console.log(`push history to sign in`)
                this.props.onRegistrationSuccess();

                this.props.history.push(`/sign-in`)

            })

            .catch(res => {
                this.setState({ error: res.error })
            })


    }

    render() {
        const { error } = this.state
        return (
            <>
                <div className="headline">
                    <h3>Register for a landlord account</h3>
                    <h4>For a tenant account, ask your landlord for their customized link. </h4>
                </div>
                <div className="total-registration-form">
                    <form
                        className='RegistrationForm'
                        onSubmit={this.handleSubmit}
                    >

                        <div role='alert'>
                            {error && <p className='red'>{Object.keys(error)}</p>}
                        </div>
                        <div className='full_name'>
                            <label htmlFor='RegistrationForm__full_name'>
                                Full name
                            </label>
                            <input
                                type='text'
                                name='full_name'
                                required
                                id='RegistrationForm__full_name' />

                        </div>
                        <div className='email'>
                            <label htmlFor='RegistrationForm__email'>
                                Email
                            </label>
                            <input
                                type='text'
                                name='email'

                                required
                                id='RegistrationForm__email' />

                        </div>
                        <div className='password'>
                            <p>Demo123! <i>Password must be at least 8 characters long, contain a special character, one upper case letter and one lower case letter.</i></p>
                            <label htmlFor='RegistrationForm__password'>
                                Password
                            </label>

                            <input
                                type='password'
                                name='password'
                                required
                                id='RegistrationForm__password' />

                        </div>
                        <button type='submit'> Register</button>
                    </form>
                </div>
            </>
        )
    }
}
