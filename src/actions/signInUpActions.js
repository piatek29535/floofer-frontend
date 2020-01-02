import axios from 'axios';

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

export function signUpButtonClicked(user){
    return dispatch => {
        dispatch({type:'SIGN_UP_BUTTON_FETCHING', payload:true});

        const {name, surname, email, password, country, town, birthDate, maleOrFemale} = user;

        const newUser = {
            first_name:name,
            last_name:surname,
            email:email,
            password:password
        };

        const config = {
            "Content-Type":'application/json',
        };


        axios.post(process.env.REACT_APP_API_URL + '/api/users', newUser , config)
            .then(response => {
                dispatch({type:'SIGN_UP_BUTTON_FETCHED', payload:response});
                dispatch(signInClicked())
            })
            .catch(err => dispatch({type:'SIGN_UP_BUTTON_FETCHING_ERROR', payload:err}))

    }
}