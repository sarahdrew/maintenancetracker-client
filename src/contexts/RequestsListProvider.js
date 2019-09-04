import React, { Component } from 'react'
import RequestsListContext from './RequestsListContext';

export default class RequestsListProvider extends Component {
    state = {
        RequestsList: [],
        error: null,
    };

    setRequestsList = RequestsList => {

        this.setState({ RequestsList })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            RequestsList: this.state.RequestsList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setRequestsList: this.setRequestsList,
        }
        return (
            <RequestsListContext.Provider value={value}>
                {this.props.children}
            </RequestsListContext.Provider>
        )
    }
}
