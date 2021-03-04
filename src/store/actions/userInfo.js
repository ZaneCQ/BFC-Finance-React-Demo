import { LOGIN, LOGOUT, CONNECT, DISCONNECT } from 'store/actions/userInfo';
export function login(text) {
    return {
        type: LOGIN,
        text: text
    }
}

export function logout(text) {
    return {
        type: LOGOUT,
        text: text
    }
}

export function connectToWallet(text) {
    return {
        type: CONNECT,
        text: text
    }
}

export function disconnectToWallet(text) {
    return {
        type: DISCONNECT,
        text: text
    }
}
