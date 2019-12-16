import axios from "axios";

export function addPostAction(content, photos){
    return dispatch => {
        dispatch({type:'ADDING_POST', payload:true})

        const headers = {
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        instance.post('/api/posts/',{params:{content:content}})
            .then(response => dispatch({type:'ADD_POST_SUCCESS', payload:response.data}))
            .catch(err => dispatch({type:'ADD_POST_FAILURE', payload:err}))
    }
}