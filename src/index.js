import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import stores from './store';
import './global.css';

const render = Component => (
    ReactDom.render(
        <Provider store={stores}>
            <Component />
        </Provider>,
        document.getElementById('app')
    )
);

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        console.log('---- hot ----')
        render(App);
    });
}
