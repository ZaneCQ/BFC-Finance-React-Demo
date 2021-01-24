import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './index.less'

const Navigationbar = (props) => (
    <ul className={style['navigatorUl']}>
        {
            props.pages.map(page => (
                <li key={page.name}><Link to={page.path}>{page.name}</Link></li>

            ))
        }
    </ul>
)

const mapStateToProps = state => {
    return {
        pages: state.navigator.pages,
    }
}
const mapDispatchToProps = {
    increament: {
        type: 'Add',
        text: {
            name: 'New Page',
            path: '/newPage',
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigationbar);