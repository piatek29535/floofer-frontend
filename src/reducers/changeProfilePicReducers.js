export const changeProfilePicReducers = (state = {
    profilePicChanging:false,
    profilePicSuccess:null,
    profilePicError:null
}, action) => {
    switch (action.type) {
        case 'PROFILE_PIC_CHANGING':
            return {
                profilePicChanging:action.payload,
                profilePicSuccess:null,
                profilePicError:null
            };
        case 'PROFILE_PIC_SUCCESS':
            return {
                profilePicChanging:false,
                profilePicSuccess:action.payload,
                profilePicError:null
            };
        case 'PROFILE_PIC_FAILURE':
            return {
                profilePicChanging:false,
                profilePicSuccess:null,
                profilePicError:action.payload
            };
        default:
            return state;
    }
}