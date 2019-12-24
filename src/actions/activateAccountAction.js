import axios from "axios";

export function activateAccountAction(id) {
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

        dispatch({type:'ACTIVATING_ACCOUNT', payload:true});

        return instance.get(`/api/activate/${id}`, {_token:id})
            .then(response => response.data)
            .then(json => {dispatch({type:'ACTIVATION_SUCCESS', payload:json})})
            .catch(err => dispatch({type:'ACTIVATION_FAILURE',payload:err}))
    }
}