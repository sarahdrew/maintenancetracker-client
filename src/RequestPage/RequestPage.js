import React, { Component } from 'react';
import RequestsContext from '../contexts/RequestsContext';
import RequestApiService from '../services/request-api-service';
import TokenService from '../services/token-service';
import config from '../config';



export default class RequestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            status: '',
            updated: false
        }
    }
    static defaultProps = {
        match: { params: {} },

    }



    static contextType = RequestsContext


    updateRequests(status) {
        this.setState({
            status: status,
            updated: true
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
        console.log(`handleSubmit for update tracker begins`);
        console.log(`description: `, event.target.status.value)
        const update = {
            title: this.context.request.title,
            description: this.context.request.description,
            status: event.target.status.value,
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
                console.log(response);
                if (!response.ok) {
                    return response.json().then(e => Promise.reject(e));
                }

                return response.json()
            })
            .then(update => {
                console.log('UPDate: ', update);
                this.context.updateRequests(update);

            })
            .catch(error => {
                console.error({ error })
            })

    }

    renderRequest() {
        const { request } = this.context
        console.log(`request: `, { request })
        return <>
            <h2>Title: </h2>
            {request.title}

            <p> <b>Description: </b>{request.description}</p>
            {this.context.request.status &&
                <div>
                    State: {this.context.request.status}
                    <br /><br />
                </div>
            }
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="status">What's the status?</label>
                <input type='radio' name='status' value="received" /> project received
                 <input type='radio' name='status' value="started" /> project started
                 <input type='radio' name='status' value="completed" /> project completed
             <button type="submit"> Update progress</button>

            </form>


        </>

    }

    renderUpdatedRequest() {
        const { request } = this.context
        return (
            <>
                <h2>Title: </h2>
                {request.title}
                <p> <b>Description: </b>{request.description}</p>
                <p>Status: {request.status}</p>
            </>
        )
    }

    render() {
        console.log(this.context)
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


// function RequestDescription({ request }) {
//     return (
//         <span className='RequestPage__description'>
//             {request.description}
//         </span>
//     )
// }