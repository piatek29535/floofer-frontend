import axios from "axios";

export function fetchPosts(){
    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const instance = axios.create({
        baseURL:process.env.REACT_APP_API_URL,
        timeout:3000,
        headers:headers
    });

    return dispatch => {
        dispatch({type:'POSTS_FETCHING', payload:true});

        instance.get('/api/me/feed')
            .then(response => response.data)
            .then(json => dispatch({type:'POSTS_FETCHED',payload:json}))
            .catch(err => dispatch({type:'POSTS_FETCH_ERROR', payload:err}))
    }

}