export const newsDialogData = (state ={
    postFetching:false,
    isOpened:false,
    post:{},
    postError:null,
    actionPerformed:false
}, action) => {
    switch (action.type) {
        case 'FETCHING_POST':
            return {
                postFetching:action.payload,
                post: {},
                postError: null,
                ...state,
                actionPerformed:true
            };
        case 'FETCHING_POST_SUCCESS':
            return {
                postFetching:false,
                isOpened: true,
                post: action.payload,
                postError: null,
                actionPerformed:false
            };
        case 'FETCHING_POST_ERROR':
            return {
                postFetching:false,
                isOpened:false,
                post:{},
                postError:action.payload,
                actionPerformed:false
            };
        case 'CLOSE_POST_DIALOG':
            return {
                postFetching:false,
                isOpened:false,
                post:{},
                postError:null,
                actionPerformed:false
            };
        default:
            return state;
    }
};