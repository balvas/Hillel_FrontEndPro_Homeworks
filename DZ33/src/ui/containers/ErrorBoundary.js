import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        // fetch()
        console.log(error, errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        return hasError ? <h1>Что-то пошло не так.</h1> : children;
    }
}

export default ErrorBoundary;
