import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Header from 'components/Header';
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
        const { history } = this.props;
        return (
            <Fragment>
                <Header history={history} />
                <div>This is Home</div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({ userInfo: state.userInfo });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);