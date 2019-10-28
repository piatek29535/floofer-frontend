export const loginReducer = (state = {
    isAuthenticating:false,
    isLogged:false,
    isLoginError:false,
    token:'',
    loginErrorData:'',
    loginErrorStatus:null,


}, action) => {
    switch(action.type){
        case 'IS_AUTHENTICATING':
            return {
                isAuthenticating: action.payload,
                isLogged:false,
                isLoginError: false,
                token:'',
                loginErrorData: '',
                loginErrorStatus: null
            };
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token',action.payload);

            return {
                isAuthenticating: false,
                isLogged:true,
                isLoginError:false,
                token:action.payload,
                loginErrorData: '',
                loginErrorStatus: null
            };
        case 'LOGIN_ERROR':
            localStorage.setItem('token', null);

            return {
                isAuthenticating: false,
                isLogged:false,
                isLoginError:true,
                token:'',
                loginErrorData: action.payload.data,
                loginErrorStatus: action.payload.status
            };
        default:
            return state;
    }
};