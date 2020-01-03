import axios from "axios";
import {fetchUserAction} from "./fetchUserAction";

export function changeProfilePicAction(image, userId){
    return dispatch => {
        dispatch({type:'PROFILE_PIC_CHANGING', payload:true});

        const headers = {
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        const formData = new FormData(); // just to make sure everything is send correctly if multipart/form-data
        formData.append('image',image);

        instance.put('/api/me/profilePic', formData)
            .then(response => {
                dispatch({type:'PROFILE_PIC_SUCCESS', payload:response.data});
                dispatch(fetchUserAction(userId))
            })
            .catch(err => dispatch({type:'PROFILE_PIC_FAILURE', payload:err}))
    }
}