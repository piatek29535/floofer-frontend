export const fetchData = (state =
                              {
                                  opinionsError:false,
                                  opinionsFetching:true
                              }
                              , action) => {
    switch(action.type){
        case "OPINIONS_FETCHED":{
            return {...state, json:action.payload, opinionsFetching: false}
        }
        case "OPINIONS_FETCH_ERROR":{
            return {...state, opinionsError:action.payload, opinionsFetching: false}
        }
        case "OPINIONS_FETCHING":{
            return {...state, opinionsFetching: action.payload}
        }
        default:
            return state;
    }
};