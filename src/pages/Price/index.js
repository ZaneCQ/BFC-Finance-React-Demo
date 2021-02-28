import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPrices } from 'store/actions/price';
import { FixedSizeList as List } from "react-window";
import style from './index.less';

class Price extends Component {
    componentDidMount() {
        this.props.getPrices();
    }

    Row = ({ data, index, style: styled }) => {
        return (<div className={index % 2 ? style["ListItemOdd"] : style["ListItemEven"]} style={styled}>
            {/* <span className={style['splitter']}>{data[index].id}</span> */}
            <span className={style['splitter']}>{data[index].symbol}</span>
            <span className={style['splitter']}>{data[index].name}</span>
            <span className={style['splitter']}>{data[index].value} $</span>
        </div>)
    }

    render() {
        const { fetchStatus, currencyPrices } = this.props;
        // console.log('prices::::::', currencyPrices);
        return (
            <div>
                <List
                    className={style['priceList']}
                    width={style['priceList'].width}
                    height={window.innerHeight}
                    itemData={currencyPrices}
                    itemCount={Object.keys(currencyPrices).length}
                    itemSize={20}
                >
                    {this.Row}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fetchStatus: {
        url: state.price.url,
        fetching: state.price.fetching,
    },
    currencyPrices: Object.values(state.price.list),
});
const mapDispatchToProps = dispatch => ({
    getPrices: () => dispatch(getPrices())
});
export default connect(mapStateToProps, mapDispatchToProps)(Price);