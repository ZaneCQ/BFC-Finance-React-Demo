import React, { Component } from 'react';
import style from './index.less';

export default class NotFound extends Component {
    render() {
        return (
            <div className={style['container']}>
                <p>404 - Page Not Found!</p>
            </div>
        )
    }
}