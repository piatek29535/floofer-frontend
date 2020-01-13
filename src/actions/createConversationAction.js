import axios from "axios";
import {fetchConversationsAction} from "./fetchConversationsAction";

export function createConversationAction(participants){

    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const instance = axios.create({
        baseURL:process.env.REACT_APP_API_URL,
        timeout:3000,
        headers:headers
    });

    console.log(participants)

    return dispatch => {
        dispatch({type:'CONVERSATION_CREATE_SEND',payload:true});

        instance.post('/api/conversations',{participants:participants})
            .then(response => {
                dispatch(fetchConversationsAction());
                dispatch({type:'CONVERSATION_CREATE_SUCCESS', payload:'CONVERSATION_CREATED'})
            })
            .catch(err => dispatch({type:'CONVERSATION_CREATE_FAILURE',payload:err}))
    }
}