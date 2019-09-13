import React, { Component } from 'react';
import config from "../config";
import ApiContext from "../ApiContext";
import RequestsForm from '../RequestsForm/RequestsForm';
import TokenService from '../services/token-service';
import './CreateRequest.css'

export default class CreateRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',


        }
    }

    updateRequests(title, description) {
        this.setState({ title, description })
    }

    static defaultProps = {
        history: {
            push: () => { }
        }
    };
    static contextType = ApiContext;


    addRequest = request => {

        this.setState({
            requests: [...this.state.request, request]
        });
    };

    handleSubmit = event => {
        event.preventDefault();


        const request = {
            title: event.target["title"].value,
            description: event.target["description"].value,
        }

        fetch(`${config.API_ENDPOINT}/api/requests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(request)
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(e => Promise.reject(e));
                }

                return response.json()
            })
            .then(request => {
                this.context.addRequest(request);
                this.props.history.push(`/requests/${request.id}`)

            })
            .catch(error => {
                console.error({ error })
            })

    }




    render() {
        return (
            <section className="create-request">
                <h1>Create a request</h1>
                <p>You can create your request as a signed-in user. Enter in your request below.</p>
                <div className="request-not-working"> Request not sending? Make sure you've registered for an account and signed in.</div>
                <RequestsForm onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="title">Title</label>
                        <input placeholder='Leaky faucet'
                            type="text"
                            name='title'
                            id='title'
                            onChange={event => this.updateRequests(event.target.value)} />
                    </div>

                    <div className="field">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name='description' id='description' placeholder="Faucet in the bathroom leaks when tap is off"
                            onChange={event => this.updateRequests(event.target.value)} />
                    </div>


                    <button type='submit' onSubmit={this.handleSubmit}>Send my request</button>

                </RequestsForm>


            </section>
        )
    }
}