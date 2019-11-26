export const newsDialogData = (state ={
    isOpened:false,
    post:{}
}, action) => {
    switch (action.type) {
        case 'OPEN_POST_DIALOG':
            return {isOpened: action.payload.isOpened, post: action.payload};
        case 'CLOSE_POST_DIALOG':
            return {isOpened: action.payload, post:{}};
        default:
            return state;
    }
};