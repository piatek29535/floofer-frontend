export const commentDeleteReducers = (state = {
    commentDeleteSend:false,
    commentDeleteSuccess:null,
    commentDeleteFailure:null
},action) => {
    switch (action.type) {
        case 'COMMENT_DELETE_SEND':
            return {
                commentDeleteSend:action.payload,
                commentDeleteSuccess:null,
                commentDeleteFailure:null
            };
        case 'COMMENT_DELETE_SUCCESS':
            return {
                commentDeleteSend:false,
                commentDeleteSuccess:action.payload,
                commentDeleteFailure:null
            };
        case 'COMMENT_DELETE_FAILURE':
            return {
                commentDeleteSend:false,
                commentDeleteSuccess:null,
                commentDeleteFailure:action.payload
            };
        default:
            return state;
    }
}