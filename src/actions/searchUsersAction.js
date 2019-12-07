import axios from "axios";

export function searchUsersAction() {
    return dispatch => {
        dispatch({type:'FETCHING_USERS', payload:true})

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:'https://nz-social-media-api.herokuapp.com',
            timeout:3000,
            headers:headers
        });

        instance.get('/api/users')
            .then(response => dispatch({type:'USERS_SUCCESS', payload:response.data}))
            .catch(err => dispatch({type:'USERS_ERROR', payload:err}))
    }
}