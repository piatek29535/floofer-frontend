export const newsDialogData = (state ={
    postFetching:false,
    isOpened:false,
    post:{},
    postError:null
}, action) => {
    switch (action.type) {
        case 'FETCHING_POST':
            return {
                postFetching:action.payload,
                post: {},
                postError: null,
                ...state,
            };
        case 'FETCHING_POST_SUCCESS':
            return {
                postFetching:false,
                isOpened: true,
                post: action.payload,
                postError: null
            };
        case 'FETCHING_POST_ERROR':
            return {
                postFetching:false,
                isOpened:false,
                post:{},
                postError:action.payload
            };
        case 'CLOSE_POST_DIALOG':
            return {
                postFetching:false,
                isOpened:false,
                post:{},
                postError:null
            };
        default:
            return state;
    }
};