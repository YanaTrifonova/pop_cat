import {combineReducers} from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import record from "./record/reducer";

export default combineReducers({
    appState,
    user,
    record,
});
