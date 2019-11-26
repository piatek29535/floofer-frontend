import {instance} from '../URL';

export function likeAction(id){
    return dispatch => {
        dispatch({type:'LIKE_SEND', payload:true});

        instance.post(`/api/posts/${id}/like`)
            .then(response => response.data)
            .then(json => dispatch({type:'LIKE_SUCCESS', payload:json}))
            .catch(err => dispatch({type:'LIKE_FAILURE',payload:err}))
    }
}