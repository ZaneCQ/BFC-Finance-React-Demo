const initalState = {
    page: 'home',
}

const JUMP = 'Jump';

const homeData = (state = initalState, action) => {
    // console.log('home:', action, state)
    switch(action.type) {
        case JUMP:
            return { ...state, page: action.text }
        default:
            return state; 
    }
}

export default homeData;