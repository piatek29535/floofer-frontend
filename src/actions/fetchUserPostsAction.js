import axios from "axios";

export function fetchUserPostsAction(id) {
    return dispatch => {
        dispatch({type:'FETCHING_USER_POSTS',payload:true})

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:'http://localhost:3001',
            timeout:3000,
            headers:headers
        });

        instance.get(`/api/users/${id}/posts`)
            .then(response => dispatch({type:'USER_POSTS_SUCCESS', payload:response.data}))
            .catch(err => dispatch({type:'USER_POSTS_FAILURE', payload:err}))
    }
}