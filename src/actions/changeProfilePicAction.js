import axios from "axios";
import {fetchCurrentlyLoggedUser} from "./fetchCurrentlyLoggedUser";

export function changeProfilePicAction(image){
    return dispatch => {
        dispatch({type:'PROFILE_PIC_CHANGING', payload:true});

        const headers = {
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:'https://nz-social-media-api.herokuapp.com',
            timeout:3000,
            headers:headers
        });

        const formData = new FormData(); // just to make sure everything is send correctly if multipart/form-data
        formData.append('image',image);

        instance.put('/api/me/profilePic', formData)
            .then(response => {
                dispatch({type:'PROFILE_PIC_SUCCESS', payload:response.data});
                dispatch(fetchCurrentlyLoggedUser())
            })
            .catch(err => dispatch({type:'PROFILE_PIC_FAILURE', payload:err}))
    }
}