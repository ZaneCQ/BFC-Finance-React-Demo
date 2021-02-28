export const FETCH_START = 'fetchStart';
export const FETCH_SUCCESS = 'fetchSuccess';
export const FETCH_FAILED = 'fetchFailed';
export const UPDATE_LIST = 'updateList';
export const SET_PRICE = 'setPrice';

export function updateList(list) {
    return {
        type: UPDATE_LIST,
        text: {
            list
        }
    }
}

export function setPrice(list) {
    return {
        type: SET_PRICE,
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

export function fetchSuccess(data) {
    return {
        type: FETCH_SUCCESS,
        text: {
            fetching: false,
            data
        }
    }
}

export function fetchFailed() {
    return {
        type: FETCH_FAILED,
        text: {
            fetching: false,
            data: []
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

export function getList(dispatch) {
    const URL = 'https://api.coingecko.com/api/v3/coins/list';
    return fetchSomething(URL, {}, dispatch).then(data => {
        let list = {};
        data.forEach(item => {
            list[item.id] = {
                id: item.id,
                symbol: item.symbol, 
                name: item.name,
                value: 'N/A'
            }
        });
        dispatch(updateList(list));
        return data.slice(0, 99).map(item => item.id);
        // return data.map(item => item.id);
    });
}

export function getPrices() {
    let URL = 'https://api.coingecko.com/api/v3/simple/price';
    return function (dispatch) {
        return getList(dispatch).then(data => {
            URL = `${URL}?ids=${data.join(',')}&vs_currencies=usd`;
            return fetchSomething(URL, {
                method: 'GET'
            }, dispatch).then(data => {
                dispatch(fetchSuccess(data));
                dispatch(setPrice(data))
                return data;
            });
        })
    };
}