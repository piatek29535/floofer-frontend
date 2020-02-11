import axios from "axios";
import {fetchCurrentlyLoggedUser} from "./fetchCurrentlyLoggedUser";

export function editCurrentlyLoggedUserAction(state) {

    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const instance = axios.create({
        baseURL:process.env.REACT_APP_API_URL,
        timeout:3000,
        headers:headers
    });

    const credentials = {
        first_name:state.first_name,
        last_name:state.last_name,
        password:state.password,
        country:state.country,
        city:state.city
    };

    return dispatch => {

        dispatch({type:'CURRENT_USER_EDIT_FETCHING', payload:true});

        return instance.put('/api/me', credentials)
            .then(response => response.data)
            .then(json =>{
                dispatch(fetchCurrentlyLoggedUser());
                dispatch({type:'CURRENT_USER_EDIT_SUCCESS', payload:json})
            })
            .catch(err => dispatch({type:'CURRENT_USER_EDIT_ERROR',payload:err}))
    }
}