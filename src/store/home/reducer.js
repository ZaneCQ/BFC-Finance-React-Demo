const initalState = {
    page: 'home',
    status: true
}

const homeData = (state = initalState, action) => {
    switch(action.type) {
        case 'Jump':
            return { ...state, page: action.text }
        default:
            return state; 
    }
}

export default homeData;