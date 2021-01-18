import {GET_MY_POSTS} from "./action";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MY_POSTS:
            return action.payload;
        default:
            return state;
    }
};
