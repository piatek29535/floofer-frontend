export const mainUser = (state = {
    isUserFetching:false,
    userData:{},
    userError:null
}, action) => {
    switch(action.type){
        case 'CURRENTLY_LOGGED_USER_FETCHING':
            return {
                isUserFetching: action.payload,
                userData: {},
                userError: null
            };
        case 'CURRENTLY_LOGGED_USER_FETCHED':
            return {
                isUserFetching: false,
                userData: action.payload,
                userError: null
            };
        case 'CURRENTLY_LOGGED_USER_ERROR':
            return {
                isUserFetching: false,
                userData: {},
                userError: action.payload
            };
        default:
            return state;
    }
};