export const fetchSingleConversationReducers = (state = {
    fetchingSingleConversation:false,
    fetchingSingleConversationSuccess:{},
    fetchingSingleConversationFailure:null
},action) => {
    switch (action.type) {
        case 'SINGLE_CONVERSATION_FETCH_SEND':
            return {
                fetchingSingleConversation:action.payload,
                fetchingSingleConversationSuccess:{...state.fetchingSingleConversationSuccess},
                fetchingSingleConversationFailure:null
            };
        case 'SINGLE_CONVERSATION_FETCH_SUCCESS':
            return {
                fetchingSingleConversation:false,
                fetchingSingleConversationSuccess:action.payload,
                fetchingSingleConversationFailure:null
            };
        case 'SINGLE_CONVERSATION_FETCH_FAILURE':
            return {
                fetchingSingleConversation:false,
                fetchingSingleConversationSuccess:{},
                fetchingSingleConversationFailure:action.payload
            };
        default:
            return state;
    }
};