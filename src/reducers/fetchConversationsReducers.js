export const fetchConversationsReducers = (state = {
    fetchingConversations:false,
    fetchingConversationsSuccess:[],
    fetchingConversationsFailure:null
},action) => {
    switch (action.type) {
        case 'CONVERSATION_FETCH_SEND':
            return {
                fetchingConversations:action.payload,
                fetchingConversationsSuccess:[],
                fetchingConversationsFailure:null
            };
        case 'CONVERSATION_FETCH_SUCCESS':
            return {
                fetchingConversations:false,
                fetchingConversationsSuccess:action.payload,
                fetchingConversationsFailure:null
            };
        case 'CONVERSATION_FETCH_FAILURE':
            return {
                fetchingConversations:false,
                fetchingConversationsSuccess:[],
                fetchingConversationsFailure:action.payload
            };
        default:
            return state;
    }
};