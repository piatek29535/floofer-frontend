export const createConversationReducers = (state = {
    creatingConversation:false,
    createConversationSuccess:null,
    createConversationFailure:null
},action) => {
    switch (action.type) {
        case 'CONVERSATION_CREATE_SEND':
            return {
                creatingConversation:action.payload,
                createConversationSuccess:null,
                createConversationFailure:null
            };
        case 'CONVERSATION_CREATE_SUCCESS':
            return {
                creatingConversation:false,
                createConversationSuccess:action.payload,
                createConversationFailure:null
            };
        case 'CONVERSATION_CREATE_FAILURE':
            return {
                creatingConversation:false,
                createConversationSuccess:null,
                createConversationFailure:action.payload
            };
        default:
            return state;
    }
};