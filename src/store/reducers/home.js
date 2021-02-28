const initalState = {
    page: 'home',
}

const JUMP = 'Jump';

const homeData = (state = initalState, action) => {
    switch(action.type) {
        case JUMP:
            return { ...state, page: action.text }
        default:
            return state; 
    }
}

export default homeData;