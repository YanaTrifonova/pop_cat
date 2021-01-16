import {ADD_NOTE, CLEAR_STATE, PRE_SAVE_RECORD} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload];

        case PRE_SAVE_RECORD:
            let newState = [];

            let time;
            let note;

            for (let i = 1; i < state.length; i++) {
                time = state[i].time - state[0].time;
                note = state[i].note

                newState[i] = {
                    time: time,
                    note: note
                };
            }

            newState[0] = {
                time: 0,
                note: state[0].note
            }

            console.log("PRE_SAVE_RECORD", newState);
            window.localStorage.setItem("song", JSON.stringify(newState));

            return newState;

        case CLEAR_STATE :
            window.localStorage.removeItem("song");
            return action.payload;
        default:
            return state;
    }
};
