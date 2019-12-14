import axios from "axios";

export function newsDialogPostOpen(id){

    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const instance = axios.create({
        baseURL:'http://localhost:3001',
        timeout:3000,
        headers:headers
    });

    return dispatch => {
        dispatch({type:'FETCHING_POST',payload:true});

        instance.get(`/api/posts/${id}`)
            .then(response => response.data)
            .then(json => dispatch({type:'FETCHING_POST_SUCCESS',payload:json}))
            .catch(err => dispatch({type:'FETCHING_POST_ERROR',payload:err}))
    };
}

export function newsDialogPostClose(){

    return ({
        type:'CLOSE_POST_DIALOG',
        payload:false
    })
}