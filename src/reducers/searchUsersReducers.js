export const searchUsersReducers = (state = {
    fetchingUsers:false,
    users:[],
    usersError:null
}, action) => {
    switch(action.type){
        case "FETCHING_USERS":
            return {
                fetchingUsers: action.payload,
                usersError: null,
                users:state.users
            };
        case "USERS_SUCCESS":
            return {
                fetchingUsers:false,
                users:action.payload,
                usersError:null
            };
        case "USERS_ERROR":
            return {
                fetchingUsers:false,
                users:[],
                usersError:action.payload
            };
        default:
            return state;
    }
};