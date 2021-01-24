const initalState = {
    name: '',
    age: 0,
    gender: 'Male',
    company: '',
}

const userData = (state = initalState, action) => {
    switch(action.type) {
        case 'change':
            return { ...state, ...action.text }
        default:
            return state; 
    }
}

export default userData;