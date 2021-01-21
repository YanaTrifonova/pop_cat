import {GET_FAVOURITES_POSTS} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVOURITES_POSTS:
            return action.payload;
        default:
            return state;
    }
};