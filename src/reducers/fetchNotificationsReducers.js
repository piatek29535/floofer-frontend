export const fetchNotificationsReducers = (state = {
    notificationsFetching:false,
    notificationsSuccess:[],
    notificationsError:null
}, action) => {
    switch(action.type){
        case 'NOTIFICATIONS_FETCHING':
            return {
                notificationsFetching:action.payload,
                notificationsSuccess:[...state.notificationsSuccess],
                notificationsError:null
            };
        case 'NOTIFICATIONS_SUCCESS':
            return {
                notificationsFetching:false,
                notificationsSuccess:action.payload,
                notificationsError:null
            };
        case 'NOTIFICATIONS_FAILURE':
            return {
                notificationsFetching:false,
                notificationsSuccess:[],
                notificationsError:action.payload
            };
        default:
            return state;
    }
}