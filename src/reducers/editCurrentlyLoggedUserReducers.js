export const editCurrentlyLoggedUserReducers = (state = {
    currentUserEditFetching:false,
    currentUserEditSuccess:null,
    currentUserEditFailure:null
},action) => {
    switch (action.type) {
        case 'CURRENT_USER_EDIT_FETCHING':
            return {
                currentUserEditFetching:action.payload,
                currentUserEditSuccess:null,
                currentUserEditFailure:null
            };
        case 'CURRENT_USER_EDIT_SUCCESS':
            return {
                currentUserEditFetching:false,
                currentUserEditSuccess:action.payload,
                currentUserEditFailure:null
            };
        case 'CURRENT_USER_EDIT_ERROR':
            return {
                currentUserEditFetching:false,
                currentUserEditSuccess:null,
                currentUserEditFailure:action.payload
            };
        default:
            return state;
    }
};