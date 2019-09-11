export function fetchOpinionsFromServer(){
    return dispatch => {
        return fetch('http://localhost:9001/opinions')
            .then((response) => {return response.json()})
            .then((json) => {
                return dispatch({type:"OPINIONS_FETCHED", payload:json})
            })
            .catch((err) => console.log(err));
    }
}
