import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Home extends Component {
    /* constructor (props) {
        super(props);
        console.log('Home constructor');
        const { userInfo } = this.props;
        console.log('user:', userInfo);
        if (userInfo.name.length === 0) {
            console.log('Jump to Login Page')
            props.history.push('/login');
        }
    } */

    render() {
        return <div>This is Home</div>;
    }
}

const mapStateToProps = state => ({ userInfo: state.userInfo });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);