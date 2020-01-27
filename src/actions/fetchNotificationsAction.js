import axios from "axios";

export function fetchNotificationsAction(){

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
        dispatch({type:'NOTIFICATIONS_FETCHING',payload:true});

        instance.get('/api/me/notifications')
            .then(response => dispatch({type:'NOTIFICATIONS_SUCCESS', payload:response.data}))
            .catch(err => dispatch({type:'NOTIFICATIONS_FAILURE',payload:err}))
    }
}