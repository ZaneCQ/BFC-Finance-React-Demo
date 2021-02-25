import { resolve } from "../../../node_modules/_@types_q@1.5.4@@types/q/index";

export function login(text) {
    return {
        type: 'change',
        text: text
    }
}

function requestGet(url) {
    return {
        type: 'GET',
        url
    }
}

export function fetchSomething(url) {
    return function (dispatch) {
        dispatch(requestPosts(url));
        return new Promise((resolve, reject) => {
            console.log('Do some asynchronous action');
            resolve('response');
        });
    }
}