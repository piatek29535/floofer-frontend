import axios from "axios";
import {fetchSingleConversationAction} from "./fetchSingleConversationAction";

export function sendMessageAction(id, message){

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
        dispatch({type:'MESSAGE_SEND',payload:true});

        instance.post(`/api/conversations/${id}`, {content:message})
            .then(response => {
                dispatch(fetchSingleConversationAction(id));
                dispatch({type:'MESSAGE_SUCCESS', payload:response.data})
            })
            .catch(err => dispatch({type:'MESSAGE_FAILURE',payload:err}))
    }
}