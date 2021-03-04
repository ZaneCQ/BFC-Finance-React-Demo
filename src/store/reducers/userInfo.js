const initialState = {
    name: '',
    info: {
        earned: 50,
        depositList: [
            {
                key: 1,
                token_1: 'FCB',
                token_2: 'USDT',
                liquidity: 1234,
                earned: 20,
            },
            {
                key: 2,
                token_1: 'DAI',
                token_2: 'USDT',
                liquidity: 1234,
                earned: 20,
            },
            {
                key: 3,
                token_1: 'VAI',
                token_2: 'USDT',
                liquidity: 1234,
                earned: 20,
            },
        ]
    },
    logined: false,
    connected: false,
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CONNECT = 'CONNECT';
export const DISCONNECT = 'DISCONNECT';

const userInfo = (state = initialState, action) => {
    console.log('action:', action, state);
    switch (action.type) {
        case LOGIN:
            return { ...state, ...action.text, logined: true };
        case LOGOUT:
            return { ...state, logined: false };
        case CONNECT:
            return { ...state, connected: true };
        case DISCONNECT:
            return { ...state, connected: false };
        default:
            return state;
    }
}

export default userInfo;