export const addPostReducers = (state = {
    addingPost:false,
    postSuccess:null,
    postFailure:null
},action) => {
    switch (action.type) {
        case 'ADDING_POST':
            return {
                addingPost:action.payload,
                postSuccess:null,
                postFailure:null
            };
        case 'ADD_POST_SUCCESS':
            return {
                addingPost:false,
                postSuccess:action.payload,
                postFailure:null
            };
        case 'ADD_POST_FAILURE':
            return {
                addingPost:false,
                postSuccess:null,
                postFailure:action.payload
            };
        default:
            return state;
    }
};