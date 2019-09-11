import {combineReducers} from "redux";
import {fetchData} from "./opinions";

const reducers = combineReducers({
    fetchData,
});

export default reducers;