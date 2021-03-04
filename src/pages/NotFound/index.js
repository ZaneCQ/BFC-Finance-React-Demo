import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import style from './index.less';

class NotFound extends Component {
    render() {
        const { history } = this.props;
        return (
            <Fragment>
                <Header  history={history} />
                <div className={style['container']}>
                    <p>404 - Page Not Found!</p>
                </div>
            </Fragment>
        )
    }
}

export default connect(() => ({}), () => ({}))(NotFound);