export const FETCH_START = 'fetchStart';
export const FETCH_SUCCESS = 'fetchSuccess';
export const FETCH_FAILED = 'fetchFailed';
export const UPDATE_LIST = 'updateList';

export function updateList(list) {
    console.log('list:', list)
    return {
        type: UPDATE_LIST,
        text: {
            list
        }
    }
}

export function doFetch(url) {
    return {
        type: FETCH_START,
        text: {
            url,
            fetching: true,
        }
    }
}

export function fetchSuccess(list) {
    return {
        type: FETCH_SUCCESS,
        text: {
            fetching: false,
        }
    }
}

export function fetchFailed() {
    return {
        type: FETCH_FAILED,
        text: {
            fetching: false,
        }
    }
}

export function fetchSomething(url, options, dispatch) {
    console.log('-------------:', url, options)
    dispatch(doFetch(url));
    return fetch(url, options).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            dispatch(fetchFailed());
            return [];
        }
    }, err => {
        dispatch(fetchFailed());
    });
}

export function getPrices() {
    return function (dispatch) {
        const count = 250;
        let URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1&sparkline=false`;
        return fetchSomething(URL, {
            method: 'GET'
        }, dispatch).then(data => {
            console.log('=============:', data);
            dispatch(fetchSuccess());
            dispatch(updateList(data.map(item => ({
                id: item.id,
                name: item.name,
                symbol: item.symbol,
                price: item.current_price,
                low: item.low_24h,
                high: item.high_24h,
                image: item.image,
                change: item.price_change_24h,
                changePercentage: item.price_change_percentage_24h,
            }))));
            return data;
        });
    };
}
