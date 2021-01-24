const initalState = {
    pages: [{
        name: 'HOME',
        path: '/',
    },{
        name: 'LOGIN',
        path: '/login',
    },{
        name: 'Not Found',
        path: '/404',
    }]
}

const navigator = (state = initalState, action) => {
    switch(action.type) {
        case 'Add':
            return { ...state, pages: state.pages.concat(action.text) }
        default:
            return state; 
    }
}

export default navigator;