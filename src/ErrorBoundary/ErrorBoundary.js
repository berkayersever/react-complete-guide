import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    render() {
        return <h1>Oops! Something went wrong.</h1>;
    }
}