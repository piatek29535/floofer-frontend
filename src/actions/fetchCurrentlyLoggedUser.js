import axios from "axios";

export function fetchCurrentlyLoggedUser() {

    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const instance = axios.create({
        baseURL:'https://nz-social-media-api.herokuapp.com',
        timeout:3000,
        headers:headers
    });

    return dispatch => {

        dispatch({type:'CURRENTLY_LOGGED_USER_FETCHING', payload:true});

        instance.get('/api/me')
            .then(response => response.data)
            .then(json => dispatch({type:'CURRENTLY_LOGGED_USER_FETCHED', payload:json}))
            .catch(err => dispatch({type:'CURRENTLY_LOGGED_USER_ERROR',payload:err}))
    }
}