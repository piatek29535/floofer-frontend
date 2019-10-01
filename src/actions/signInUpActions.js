export function signUpClicked() {
    return ({
        type:'SIGN_UP_CLICKED',
        payload:1
    })
}
export function signInClicked() {
    return ({
        type:'SIGN_IN_CLICKED',
        payload:0
    })
}

export function signUpButtonClicked(id){ // it should go with sth different than id like f.e email
    return dispatch => {
        dispatch({type:'SIGN_UP_BUTTON_FETCHING', payload:true}); // implement like circular loading in button description or sth
        fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then((response) => response.json())
            .then((json) => dispatch({type:'SIGN_UP_BUTTON_FETCHED', payload:json}))
            .catch((err) => dispatch({type:'SIGN_UP_BUTTON_FETCHING_ERROR', payload:err}))
    }
}