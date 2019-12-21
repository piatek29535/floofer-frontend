import axios from "axios";

export function searchUsersAction(search) {
    return dispatch => {
        dispatch({type:'FETCHING_USERS', payload:true})

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        instance.get('/api/users/search', {params:{search:search}})
            .then(response => dispatch({type:'USERS_SUCCESS', payload:response.data}))
            .catch(err => dispatch({type:'USERS_ERROR', payload:err}))
    }
}