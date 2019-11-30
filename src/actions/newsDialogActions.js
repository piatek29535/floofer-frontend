import {instance} from "../URL";

export function newsDialogPostOpen(id){

    return dispatch => {
        dispatch({type:'FETCHING_POST',payload:true});

        instance.get(`/api/posts/${id}`)
            .then(response => response.data)
            .then(json => dispatch({type:'FETCHING_POST_SUCCESS',payload:json}))
            .catch(err => dispatch({type:'FETCHING_POST_ERROR',payload:err}))
    };
}

export function newsDialogPostClose(){
    return ({
        type:'CLOSE_POST_DIALOG',
        payload:false
    })
}