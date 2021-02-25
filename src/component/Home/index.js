import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Home extends Component {
    render() {
        console.log('home render')
        const { userInfo } = this.props;
        console.log('user:', userInfo);
        if (userInfo.name.length === 0) {
            return <Redirect to='login' />;
        }
        return <div>This is Home</div>;
    }
}

const mapStateToProps = state => ({ userInfo: state.userInfo });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);