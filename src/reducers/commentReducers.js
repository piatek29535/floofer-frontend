export const commentReducers = (state = {
    commentSend:false, // Actually i think i dont need this at all. We'll see in the future
    commentSuccess:null,
    commentError:null,
}, action) => {
    switch (action.type) {
        case 'COMMENT_SEND':
            return {
              commentSend:action.payload,
              ...state
            };
        case 'COMMENT_SUCCESS':
            return {
                commentSend: false,
                commentSuccess: action.payload
            };
        case 'COMMENT_FAILURE':
            return {
                commentSend: false,
                commentSuccess: null,
                commentError: action.payload
            };
        default:
            return state;
    }
}