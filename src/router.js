import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navigationbar from 'component/Navigationbar';
import Home from 'component/Home';
import Login from 'component/Login';
import NotFound from 'component/NotFound';

console.log();
class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Navigationbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </HashRouter>
        )
    }
}

export default Routes;