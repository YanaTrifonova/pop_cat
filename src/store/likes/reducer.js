import {DELETE_LIKE, SET_LIKE} from "./action";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LIKE :
            console.log("SET_LIKE", action.payload)
            return action.payload;

        case DELETE_LIKE:
            console.log("DELETE_LIKE", action.payload)
            return action.payload;

        default:
            return state;
    }
};
