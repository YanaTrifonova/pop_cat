import {combineReducers} from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import record from "./record/reducer";
import preLoadMedia from "./preLoadMedia/reducer";
import posts from "./allPosts/reducer";
import myPosts from "./myPosts/reducer";
import renamePost from "./renamePost/reducer";
import likes from "./likes/reducer";
import favorites from "./favourites/reducer";
import myFavourites from "./myFavourites/reducer";

export default combineReducers({
    appState,
    user,
    record,
    preLoadMedia,
    posts,
    myPosts,
    renamePost,
    likes,
    favorites,
    myFavourites,
});
