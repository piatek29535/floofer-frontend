import axios from "axios";

export function userFollowersAndFolloweeFetchAction(id) {
    return dispatch => {
        dispatch({type:'FETCHING_USER_FOLLOWERS', payload:true});

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        instance.get(`/api/users/${id}/follows`)
            .then(response => dispatch({type:'USER_FOLLOWERS_SUCCESS', payload: response.data}))
            .catch(err => dispatch({type:'USER_FOLLOWERS_ERROR',payload:err}))
    }
}