export const sendMessageReducers = (state = {
    messageSend:false,
    messageSuccess:null,
    messageFailure:null
},action) => {
    switch (action.type) {
        case 'MESSAGE_SEND':
            return {
                messageSend:action.payload,
                messageSuccess:null,
                messageFailure:null
            };
        case 'MESSAGE_SUCCESS':
            return {
                messageSend:false,
                messageSuccess:action.payload,
                messageFailure:null
            };
        case 'MESSAGE_FAILURE':
            return {
                messageSend:false,
                messageSuccess:null,
                messageFailure:action.payload
            };
        default:
            return state;
    }
};