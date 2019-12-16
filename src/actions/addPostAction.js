import axios from "axios";
import {fetchCurrentlyLoggedUser} from "./fetchCurrentlyLoggedUser";

export function addPostAction(content, postImage){

    return dispatch => {
        dispatch({type:'ADDING_POST', payload:true});

        const headers = {
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        const formData = new FormData();
        formData.append('content',content);
        formData.append('postImage',postImage); // dont work

        instance.post('/api/posts/',formData)
            .then(response => {
                dispatch(fetchCurrentlyLoggedUser());
                dispatch({type:'ADD_POST_SUCCESS', payload:response.data})
            })
            .catch(err => dispatch({type:'ADD_POST_FAILURE', payload:err}))
    }
}