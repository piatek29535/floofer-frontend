import axios from "axios";

export function fetchSingleConversationAction(id){

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
        dispatch({type:'SINGLE_CONVERSATION_FETCH_SEND',payload:true});

        instance.get(`/api/conversations/${id}`)
            .then(response => dispatch({type:'SINGLE_CONVERSATION_FETCH_SUCCESS', payload:response.data}))
            .catch(err => dispatch({type:'SINGLE_CONVERSATION_FETCH_FAILURE',payload:err}))
    }
}