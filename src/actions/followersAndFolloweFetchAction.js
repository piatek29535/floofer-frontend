import axios from "axios";

export function fetchFollowersAndFollowee() {
    return dispatch => {
        dispatch({type:'FETCHING_FOLLOWERS', payload:true});

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        instance.get(`/api/me/follows`)
            .then(response => dispatch({type:'FOLLOWERS_SUCCESS', payload: response.data}))
            .catch(err => dispatch({type:'FOLLOWERS_ERROR',payload:err}))
    }
}