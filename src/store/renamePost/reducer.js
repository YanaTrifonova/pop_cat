import {DELETE_YOUR_POST, SET_NEW_POST_DESCRIPTION, SET_NEW_POST_NAME} from "./actions";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_POST_NAME:
            return action.payload;
        case SET_NEW_POST_DESCRIPTION:
            return action.payload;
        case DELETE_YOUR_POST:
            return action.payload;
        default:
            return state;
    }
};