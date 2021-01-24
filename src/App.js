import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Routes from './router';

class App extends Component {
    render() {
        return (
            <Routes />
        )
    }
}

export default hot(App);
