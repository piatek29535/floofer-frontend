export const readNotificationReducers = (state = {
    notificationReadFetching:false,
    notificationReadSuccess:{},
    notificationReadError:null
}, action) => {
    switch(action.type){
        case 'NOTIFICATION_READ_FETCHING':
            return {
                notificationReadFetching:action.payload,
                notificationReadSuccess:{},
                notificationReadError:null
            };
        case 'NOTIFICATION_READ_SUCCESS':
            return {
                notificationReadFetching:false,
                notificationReadSuccess:action.payload,
                notificationReadError:null
            };
        case 'NOTIFICATION_READ_FAILURE':
            return {
                notificationReadFetching:false,
                notificationReadSuccess:{},
                notificationReadError:action.payload
            };
        default:
            return state;
    }
}