import React, { Component } from 'react';
import RequestsContext from '../contexts/RequestsContext';
import RequestApiService from '../services/request-api-service';
import TokenService from '../services/token-service';
import config from '../config';
import TrackerImage from '../TrackerImage/TrackerImage';
import "../AllRequests/AllRequests.css"

export default class RequestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            status: '',
            message: '',

        }
    }
    static defaultProps = {
        match: { params: {} },

    }



    static contextType = RequestsContext


    updateRequests(title, description, status, message) {
        this.setState({
            title: title,
            description: description,
            status: status,
            message: message,

        })
    }

    componentDidMount() {
        const { requestsId } = this.props.match.params

        RequestApiService.getRequest(requestsId)
            .then(request => this.context.setRequest(request))
            .catch(error => console.error(error))
    }


    handleSubmit = event => {
        event.preventDefault();

        const update = {
            title: this.context.request.title,
            description: this.context.request.description,
            status: event.target.status.value,
            message: event.target.message.value,
            id: this.context.request.id
        }
        fetch(`${config.API_ENDPOINT}/api/requests/${this.context.request.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(update)
        })
            .then(response => {

                if (!response.ok) {
                    return response.json().then(e => Promise.reject(e));
                }

                return response.json()
            })
            .then(update => {

                this.context.updateRequests(update);

            })
            .catch(error => {
                console.error({ error })
            })

    }

    renderRequest() {
        const { request } = this.context

        return <>
            <div className="total-request-item">
                <div className="request-info">
                    <b> Title: </b>
                    {request.title}

                    <p> <b>Description: </b>{request.description}</p>
                    {this.context.request.status &&
                        <div className="status-image">
                            <p>Current status: {this.context.request.status}</p>
                            <p><TrackerImage /></p>
                        </div>
                    }
                    Message: {request.message}
                </div>
                <div className="status-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="just-status">
                            <div className="whats-the-status">
                                <label htmlFor="status">What's the status?</label>
                            </div>

                            <div className="status-received">
                                <input type='radio' name='status' value="received" checked="checked"
                                    onChange={event => this.updateRequests(event.target.value)} />  received
                            </div>
                            <div className="status-start">
                                <input type='radio' name='status' value="started"
                                    onChange={event => this.updateRequests(event.target.value)} />  started
                            </div>
                            <div className="status-completed">
                                <input type='radio' name='status' value="completed"
                                    onChange={event => this.updateRequests(event.target.value)} />  completed
                            </div>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message about request</label>
                            <input type="text" name='message' placeholder="None for now" />
                            <button type="submit"> Update progress</button>
                        </div>


                    </form>
                </div>
            </div>
        </>

    }

    renderUpdatedRequest() {
        const { request } = this.context
        return (
            <>
                <div className="total-request-item">
                    <h2>Title: </h2>
                    {request.title}
                    <p> <b>Description: </b>{request.description}</p>
                    <p>Status: {request.status}</p>
                    <TrackerImage />
                    <p>Message: {request.message}</p>
                </div>
            </>
        )
    }

    render() {
        const { request } = this.context

        let content
        if (request === undefined) {
            content = <div className='loading' />
        } else {
            content = this.renderRequest()
        }
        return (
            <div className="request-page">
                {content}
            </div>
        )
    }


}

