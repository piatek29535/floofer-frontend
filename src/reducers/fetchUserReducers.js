export const fetchUserReducers = (state = {
    userFetching:false,
    userSuccess:{},
    userError:null
}, action) => {
    switch(action.type){
        case 'USER_FETCHING':
            return {
                userFetching:action.payload,
                userSuccess:null,
                userError:null
            };
        case 'USER_SUCCESS':
            return {
                userFetching:false,
                userSuccess:action.payload,
                userError:null
            };
        case 'USER_ERROR':
            return {
                userFetching:false,
                userSuccess:null,
                userError:action.payload
            };
        default:
            return state;
    }
}