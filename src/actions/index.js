import {AUTH_USER, UNAUTH_USER} from './types';

export function signinUser() {
    return function(dispatch){
        dispatch({type: AUTH_USER})
    }
}

export function signoutUser() {
    return function(dispatch){
        dispatch({type: UNAUTH_USER})
    }
}