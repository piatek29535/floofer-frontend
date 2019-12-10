export const followUserReducers = (state = {
    followSend:false,
    followSuccess:null,
    followError:null
}, action) => {
    switch(action.type){
        case 'FOLLOW_USER_SENDING':
            return {
                followSend:action.payload,
                followSuccess:null,
                followError:null
            };
        case 'FOLLOW_USER_SUCCESS':
            return {
                followSend:false,
                followSuccess:action.payload,
                followError:null
            };
        case 'FOLLOW_USER_ERROR':
            return {
                followSend:false,
                followSuccess:null,
                followError:action.payload
            };
        default:
            return state;
    }
}