export const activateAccountReducers = (state = {
    activatingAccount:false,
    activationSuccess:{},
    activationFailure:null
},action) => {
    switch (action.type) {
        case 'ACTIVATING_ACCOUNT':
            return {
                activatingAccount:action.payload,
                activationSuccess:{},
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
                activationSuccess:{},
                activationFailure:action.payload
            };
        default:
            return state;
    }
};