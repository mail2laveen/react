import { combineReducers } from "redux";
import eventsReducer from "./events";
import empReducer from "./employees"
import jphReducer from "./jph"

export default combineReducers({
    eventsReducer,empReducer,jphReducer
});