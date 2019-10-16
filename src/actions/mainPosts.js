export function fetchPosts(){ // probably there i will have to take the collection of followers or sth
    return dispatch => {
        dispatch({type:'POSTS_FETCHING', payload:true});
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {return response.json()})
            .then(json => {return dispatch({type:'POSTS_FETCHED',payload:json})})
            .catch(err => {return dispatch({type:'POSTS_FETCH_ERROR', payload:err})})
    }

}