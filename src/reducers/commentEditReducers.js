export const commentEditReducers = (state = {
    commentEditSend:false,
    commentEditSuccess:null,
    commentEditFailure:null
},action) => {
    switch (action.type) {
        case 'COMMENT_EDIT_SEND':
            return {
                commentEditSend:action.payload,
                commentEditSuccess:null,
                commentEditFailure:null
            };
        case 'COMMENT_EDIT_SUCCESS':
            return {
                commentEditSend:false,
                commentEditSuccess:action.payload,
                commentEditFailure:null
            };
        case 'COMMENT_EDIT_FAILURE':
            return {
                commentEditSend:false,
                commentEditSuccess:null,
                commentEditFailure:action.payload
            };
        default:
            return state;
    }
}