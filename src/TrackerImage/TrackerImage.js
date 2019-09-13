import React, { Component } from 'react';
import RequestsContext from '../contexts/RequestsContext';



export default class TrackerImage extends Component {
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

    render() {
        if (this.context.request.status === 'received') {
            return <img src={require('../imgs/tracker1.PNG')} alt="trackerfor request received" width="200" />
        }
        if (this.context.request.status === 'started') {
            return <img src={require('../imgs/tracker2.PNG')} alt="tracker for request started" width="200" />
        }
        if (this.context.request.status === 'completed') {
            return <img src={require('../imgs/tracker-completed.png')} alt="tracker for request completed" width="200" />
        }
        else {
            return <></>
        }
    }
}