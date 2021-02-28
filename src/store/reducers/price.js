import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED, UPDATE_LIST, SET_PRICE } from 'store/actions/price';
const initialState = {
    url: '',
    fetching: false,
    data: [],
    list: {},
}

const price = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return { ...state, ...action.text };
        case FETCH_SUCCESS:
            return { ...state, ...action.text };
        case FETCH_FAILED:
            return { ...state, ...action.text };
        case UPDATE_LIST:
            return { ...state, list: action.text.list };
        case SET_PRICE:
            let lists = state.list;
            for (let i of Object.keys(lists)) {
                if (typeof (action.text.list[i]) === 'object') {
                    lists[i].value = action.text.list[i]['usd'];
                }
            }
            return { ...state, list: lists };
        default:
            return state;
    }
}
export default price;