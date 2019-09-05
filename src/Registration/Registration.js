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
        event.preventDefault()
        console.log(`handling the submit for registration`)

        const { full_name, email, password, landlord_tenant } = event.target
        console.log(`full name: `, full_name, `landlord_tenant:`, landlord_tenant)
        this.setState({ error: null })
        AuthApiService.postUser({
            email: email.value,
            password: password.value,
            full_name: full_name.value,
            landlord_tenant: landlord_tenant.value
        })
            .then(user => {
                full_name.value = ''
                email.value = ''
                password.value = ''
                landlord_tenant.value = ''
                console.log(`push history to sign in`)
                this.props.onRegistrationSuccess();
                this.props.history.push(`/sign-in`)

            })

            .catch(res => {
                console.log(`res`, res)
                this.setState({ error: res.error })
            })


    }

    render() {
        const { error } = this.state
        return (
            <>
                <div className="headline">
                    <h3>Register for an account</h3>
                </div>
                <div className="total-registration-form">
                    <form
                        className='RegistrationForm'
                        onSubmit={this.handleSubmit}
                    >

                        <div role='alert'>
                            {error && <p className='red'>{Object.keys(error)}</p>}
                        </div>
                        <div className="landlord_tenant">
                            <p><label htmlFor="landlord_tenant">Landlord   </label>
                                <input
                                    type='radio'
                                    name='landlord_tenant'
                                    required
                                    id='RegistrationForm__landlord' />
                            </p>
                            <p><label htmlFor="tenant_tenant">       Tenant</label>
                                <input
                                    type='radio'
                                    name='landlord_tenant'
                                    required
                                    id='RegistrationForm__tenant' /></p>

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
                            <p><i>Password must be at least 8 characters long, contain a special character, one upper case letter and one lower case letter.</i></p>
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
