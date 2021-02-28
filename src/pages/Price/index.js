import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPrices } from 'store/actions/price';
import { FixedSizeList as List } from "react-window";
import { Spin } from 'antd';
import Header from 'components/Header';
import style from './index.less';

class Price extends Component {
    componentDidMount() {
        this.props.getPrices();
    }

    Row = ({ data, index, style: styled }) => {
        // console.log('styled:', styled)
        return (<div className={index % 2 ? style["ListItemOdd"] : style["ListItemEven"]} style={styled}>
            <span className={style['splitter']}><img src={data[index].image} className={style['avatar']} /></span>
            <span className={style['splitter']}>{data[index].name}</span>
            <span className={style['splitter']}>{data[index].symbol}</span>
            <span className={style['splitter']}>${data[index].price}</span>
            <span className={style['splitter']}>${data[index].high}</span>
            <span className={style['splitter']}>${data[index].low}</span>
            <span className={style['splitter']}>{data[index].change}</span>
            <span className={style['splitter'] + ' ' + (data[index].changePercentage >= 0 ? style['up'] : style['down'])}>{data[index].changePercentage}%</span>
        </div>)
    }

    render() {
        const { fetchStatus, list, history } = this.props;
        return (
            <Fragment>
                <Header history={history}/>
                <Spin tip="Loading..." spinning={fetchStatus.fetching}>
                    <div className={style['listContainer']}>
                        <div className={style['title']}>
                            <span className={style['splitter']}>Avatar</span>
                            <span className={style['splitter']}>Name</span>
                            <span className={style['splitter']}>Symbol</span>
                            <span className={style['splitter']}>Price</span>
                            <span className={style['splitter']}>High</span>
                            <span className={style['splitter']}>Low</span>
                            <span className={style['splitter']}>Change($)</span>
                            <span className={style['splitter']}>Change Percentage</span>
                        </div>
                        <List
                            className={style['priceList']}
                            width={style['priceList'].width}
                            height={window.innerHeight - 130}
                            itemData={list}
                            itemCount={Object.keys(list).length}
                            itemSize={50}
                        >
                            {this.Row}
                        </List>
                    </div>
                </Spin>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    fetchStatus: {
        url: state.price.url,
        fetching: state.price.fetching,
    },
    list: Object.values(state.price.list),
});
const mapDispatchToProps = dispatch => ({
    getPrices: () => dispatch(getPrices())
});
export default connect(mapStateToProps, mapDispatchToProps)(Price);