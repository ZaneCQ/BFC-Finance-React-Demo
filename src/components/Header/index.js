import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './index.less';
import logoImg from 'static/images/logo.png';
import { HomeOutlined, DollarCircleOutlined, ApiOutlined } from '@ant-design/icons';

class Header extends Component {
    onClick = path => {
        const { history } = this.props;
        console.log('Nav path:', path);
        history.push(path);
    }

    render() {
        console.log('props:', this.props);

        return (
            <div className={style['headerContainer']}>
                <div className={style['logo']}><img src={logoImg} /></div>
                <div className={style['nav']}>
                    <span onClick={() => this.onClick('/')} className={style['navItem']}> <HomeOutlined /> Home</span>
                    <span onClick={() => this.onClick('/price')} className={style['navItem']}><DollarCircleOutlined /> Price</span>
                    <span className={`${style['navItem']} ${style['nav_connect']}`}><ApiOutlined /> Connect to MetaMask</span>
                </div>
            </div>
        )
    }
}

// export default connect()(Header);
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);