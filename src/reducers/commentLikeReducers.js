export const commentLikeReducers = (state = {
    commentLikeSend:false,
    commentLikeSuccess:null,
    commentLikeFailure:null
},action) => {
    switch (action.type) {
        case 'COMMENT_LIKE_SEND':
            return {
                commentLikeSend:action.payload,
                commentLikeSuccess:null,
                commentLikeFailure:null
            };
        case 'COMMENT_LIKE_SUCCESS':
            return {
                commentLikeSend:false,
                commentLikeSuccess:action.payload,
                commentLikeFailure:null
            };
        case 'COMMENT_LIKE_FAILURE':
            return {
                commentLikeSend:false,
                commentLikeSuccess:null,
                commentLikeFailure:action.payload
            };
        default:
            return state;
    }
}