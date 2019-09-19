import {combineReducers} from "redux";
import {fetchData} from "./opinions";
import {initializeRefs} from "./navigationRefs";
import {signInUpReducers} from "./singInUpReducers";

const reducers = combineReducers({
    fetchData,
    initializeRefs,
    signInUpReducers
});

export default reducers;