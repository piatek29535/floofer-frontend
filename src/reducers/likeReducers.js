export const likeReducers = (state = {
    likeSend:false,
    likeData:null,
    likeError:null
}, action) => {
    switch(action.type){
        case 'LIKE_SEND':
            return {likeSend: action.payload, likeData: null, likeError: null}
        case 'LIKE_SUCCESS':
            return {likeSend: false, likeData: action.payload, likeError: null}
        case 'LIKE_FAILURE':
            return {likeSend: false, likeData: null, likeError: action.payload}
        default:
            return state;
    }
};