import {instance} from "../URL"

export function fetchPosts(){
    return dispatch => {
        dispatch({type:'POSTS_FETCHING', payload:true});

        instance.get('/api/me/feed')
            .then(response => response.data)
            .then(json => dispatch({type:'POSTS_FETCHED',payload:json}))
            .catch(err => dispatch({type:'POSTS_FETCH_ERROR', payload:err}))
    }

}

export function toggleOnDialog() {
    return {
        type:'TOGGLE_ON',
        payload:true
    }
}

export function toggleOffDialog() {
    return {
        type:'TOGGLE_OFF',
        payload:false
    }
}