import {combineReducers} from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import record from "./record/reducer";
import preLoadMedia from "./preLoadMedia/reducer";
import posts from "./posts/reducer";

export default combineReducers({
    appState,
    user,
    record,
    preLoadMedia,
    posts,
});
