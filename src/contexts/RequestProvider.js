import React, { Component } from 'react';
import RequestsContext from './RequestsContext'

export class RequestsProvider extends Component {

    state = {

        error: null,
    };


    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setRequest = request => {
        this.setState({ request })
    }
    updateRequests = request => {
        this.setState({ request })
    }


    render() {

        return (
            <RequestsContext.Provider>
                {this.props.children}
            </RequestsContext.Provider>
        )
    }
}
