import axios from "axios";

export function readNotificationAction(id){

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
        dispatch({type:'NOTIFICATION_READ_FETCHING',payload:true});

        instance.get(`/api/me/notifications/${id}`)
            .then(response => dispatch({type:'NOTIFICATION_READ_SUCCESS', payload:response.data}))
            .catch(err => dispatch({type:'NOTIFICATION_READ_FAILURE',payload:err}))
    }
}