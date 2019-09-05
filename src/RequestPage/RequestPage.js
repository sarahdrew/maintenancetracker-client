import React, { Component } from 'react';
import RequestsContext from '../contexts/RequestsContext';
import RequestApiService from '../services/request-api-service';



export default class RequestPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }


    static contextType = RequestsContext

    componentDidMount() {
        const { requestsId } = this.props.match.params

        RequestApiService.getRequest(requestsId)
            .then(request => this.context.setRequest(request))
            .catch(error => console.error(error))
    }


    renderRequest() {
        const { request } = this.context

        return <>
            <h2>Title: </h2>
            {request.title}

            <p> <b>Description: </b>{request.description}</p>
            <p>
                <label htmlFor="status">What's the status?</label>
                <input type='radio' name='started' /> project received
                        <input type='radio' name='started' /> project started
                        <input type='radio' name='completed' /> project completed
                        </p>
        </>

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


function RequestDescription({ request }) {
    return (
        <span className='RequestPage__description'>
            {request.description}
        </span>
    )
}