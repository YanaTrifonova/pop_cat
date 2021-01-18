import {GET_ALL_POSTS} from "./action";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.payload;
        default:
            return state;
    }
};
