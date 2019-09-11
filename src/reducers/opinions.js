export const fetchData = (state = {}, action) => {
    switch(action.type){
        case "OPINIONS_FETCHED":{
            return {...state, json:action.payload}
        }
        default:
            return state;
    }
};