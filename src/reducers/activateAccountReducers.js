export const activateAccountReducers = (state = {
    activatingAccount:false,
    activationSuccess:null,
    activationFailure:null
},action) => {
    switch (action.type) {
        case 'ACTIVATING_ACCOUNT':
            return {
                activatingAccount:action.payload,
                activationSuccess:null,
                activationFailure:null
            };
        case 'ACTIVATION_SUCCESS':
            return {
                activatingAccount:false,
                activationSuccess:action.payload,
                activationFailure:null
            };
        case 'ACTIVATION_FAILURE':
            return {
                activatingAccount:false,
                activationSuccess:null,
                activationFailure:action.payload
            };
        default:
            return state;
    }
};