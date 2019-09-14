import {combineReducers} from "redux";
import {fetchData} from "./opinions";
import {initializeRefs} from "./navigationRefs";

const reducers = combineReducers({
    fetchData,
    initializeRefs
});

export default reducers;