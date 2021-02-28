const initialState = {
    name: '',
    info: {
        age: 0,
        gender: 'Male',
        company: '',
    }
}

const CHANGE = 'change';

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            console.log('action:', action, state);
            return { ...state, ...action.text };
        default:
            return state;
    }
}

export default userInfo;