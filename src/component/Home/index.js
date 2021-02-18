import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
        console.log('this.props:', this.props)
    }
    render() {
        const { userInfo } = this.props;
        return userInfo.name.length === 0 ? (
            <Redirect to='login' />
        ) : <div>This is Home</div>;
    }
}

export default connect(state => ({
    userInfo: state.userInfo
}), {})(Home);