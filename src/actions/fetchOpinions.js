export function fetchOpinionsFromServer(){
    return dispatch => {
        dispatch({type: "OPINIONS_FETCHING", payload:true})
        return fetch('http://localhost:9001/opinions')
            .then((response) => {return response.json()})
            .then((json) => {
                return dispatch({type:"OPINIONS_FETCHED", payload:json})
            })
            .catch((err) => {
                return dispatch({type:"OPINIONS_FETCH_ERROR", payload:true})
            });
    }
}
