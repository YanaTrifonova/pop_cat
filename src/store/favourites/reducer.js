import {DELETE_FAVOURITES, SET_FAVOURITES} from "./actions";


const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_FAVOURITES :
            console.log("DELETE_FAVOURITES", action.payload)
            return action.payload;

        case SET_FAVOURITES:
            console.log("SET_FAVOURITES", action.payload)
            return action.payload;

        default:
            return state;
    }
};