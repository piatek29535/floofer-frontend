import {instance} from '../URL';

export function fetchCurrentlyLoggedUser() {
    return dispatch => {

        dispatch({type:'CURRENTLY_LOGGED_USER_FETCHING', payload:true});

        instance.get('/api/me')
            .then(response => response.data)
            .then(json => dispatch({type:'CURRENTLY_LOGGED_USER_FETCHED', payload:json}))
            .catch(err => dispatch({type:'CURRENTLY_LOGGED_USER_ERROR',payload:err}))
    }
}