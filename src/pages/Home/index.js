import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import style from './index.less';

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
        const { history, logined, earned, depositList } = this.props;
        console.log('Status:', logined);

        return (
            <Fragment>
                <Header history={history} />
                <div className={style['home-wrapper']}>
                    <div className={style['container']}>
                        <div className={style['total']}>
                            <p className={style['total-text']}>You Have Earned:</p>
                            <p className={style['amount']}>$ {earned} FCB</p>
                        </div>
                        <div className={style['deposit-label']}>
                            You have deposited:
                        </div>
                        <div className={style['deposit-list']}>
                            <table>
                                <tbody>
                                    {depositList.map(item => (
                                        <tr key={item.key}>
                                            <td>
                                                <div>LP Token</div>
                                                <div>{item.token_1} - {item.token_2}</div>
                                            </td>
                                            <td>
                                                <div>Liquidity: </div>
                                                <div>{item.liquidity}</div>
                                            </td>
                                            <td>
                                                <div>Earned: </div>
                                                <div>{item.earned}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.userInfo,
    logined: state.userInfo.logined,
    earned: state.userInfo.info.earned,
    depositList: state.userInfo.info.depositList,

});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);