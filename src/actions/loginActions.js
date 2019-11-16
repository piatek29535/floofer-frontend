import axios from 'axios';

export function login(credentials){
    return dispatch => {
        dispatch({type:'IS_AUTHENTICATING', payload:true});

        const body = {
            username:credentials.email.split('@')[0],
            password:credentials.password
        };

        const headers = {
            'Content-type': 'application/json'
        };

        axios.post('https://nz-social-media-api.herokuapp.com/api/login', body, headers)
            .then(response => dispatch({type:'LOGIN_SUCCESS', payload:response.data.token}))
            .catch(err => dispatch({type:'LOGIN_ERROR', payload:err.response}))
    }
}