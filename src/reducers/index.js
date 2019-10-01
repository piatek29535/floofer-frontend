import {combineReducers} from "redux";
import {fetchData} from "./opinions";
import {initializeRefs} from "./navigationRefs";
import {signInUpReducers, signInUpButtonReducers} from "./singInUpReducers";

const reducers = combineReducers({
    fetchData,
    initializeRefs,
    signInUpReducers,
    signInUpButtonReducers
});

export default reducers;