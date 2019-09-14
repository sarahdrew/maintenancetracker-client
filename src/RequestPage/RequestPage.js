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


    updateRequests(updatedData) {
        console.log(`inside update request`, updatedData[0]);
        this.setState({
            title: updatedData[0].title,
            description: updatedData[0].description,
            status: updatedData[0].status,
            message: updatedData[0].message,

        })

    }

    componentDidMount() {
        console.log(`component did mount`)
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
                console.log(`got initial response from fetch`)
                if (!response.ok) {
                    return response.json().then(e => Promise.reject(e));
                }

                return response.json()
            })
            .then(update => {
                console.log(`got final response from fetch`, update);
                this.updateRequests(update);

            })
            .catch(error => {
                console.error({ error })
            })

    }

    renderRequest(request) {


        console.log(`renderRequest request message`, request.message)

        return <>
            <div className="total-request-item">
                <div className="request-info">
                    <b> Title: </b>
                    {request.title}

                    <p> <b>Description: </b>{request.description}</p>

                    Message: {request.message}
                    {request.status &&
                        <div className="status-image">
                            <p>Current status: {request.status}</p>
                            <p><TrackerImage /></p>
                        </div>
                    }

                </div>
                <div className="status-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="just-status">
                            <div className="whats-the-status">
                                <label htmlFor="status">What's the status?</label>
                            </div>

                            <div className="status-received">
                                <input type='radio' name='status' value="received"


                                />  received
                            </div>
                            <div className="status-start">
                                <input type='radio' name='status' value="started"

                                />  started
                            </div>
                            <div className="status-completed">
                                <input type='radio' name='status' value="completed"

                                />  completed
                            </div>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message about request</label>
                            <input type="text" name='message' placeholder="None for now" />
                            <button type="submit" > Update progress</button>
                        </div>


                    </form>
                </div>
            </div>
        </>

    }


    render() {
        const { request } = this.context

        console.log(`rendering`, this.state);
        let content
        if (request === undefined) {
            content = <div className='loading' />
        } else {
            if (this.state.title === '') {
                content = this.renderRequest(request)
            }
            else {
                content = this.renderRequest(this.state)
            }
        }
        return (
            <div className="request-page">
                {content}
            </div>
        )
    }


}




// onChange={event => this.updateRequests(event.target.value)}
// 