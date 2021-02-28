import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED, UPDATE_LIST } from 'store/actions/price';
const initialState = {
    url: '',
    fetching: false,
    data: [],
    list: {},
}

const price = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return { ...state, url: action.text.url, fetching: action.text.fetching, };
        case FETCH_SUCCESS:
            return { ...state, fetching: action.text.fetching };
        case FETCH_FAILED:
            return { ...state, fetching: action.text.fetching, list: [] };
        case UPDATE_LIST:
            return { ...state, list: action.text.list };
        default:
            return state;
    }
}

export default price;