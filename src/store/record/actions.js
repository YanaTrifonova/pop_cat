import {apiUrl} from "../../config/constants";
import axios from "axios";
import {showMessageWithTimeout} from "../appState/actions";

export const PRE_SAVE_RECORD = "PRE_SAVE_RECORD";
export const ADD_NOTE = "ADD_NOTE";
export const CLEAR_STATE = "CLEAR_STATE";

export const recordPreSaver = (noteId, time) => {
    return async (dispatch) => {
        dispatch(addNoteToLocalStorage({
            note: noteId,
            time: time
        }))
    }
}

const addNoteToLocalStorage = oneNote => {
    return {
        type: ADD_NOTE,
        payload: oneNote
    }
}

export const preSaveToLocalStorage = () => {
    return {
        type: PRE_SAVE_RECORD,
        payload: null,
    }
}

export const clearRecordInLocalStorage = () => {
    return {
        type: CLEAR_STATE,
        payload: []
    }
}

export const saveRecord = (token, cat, instrument, song, name, description) => {
    return async (dispatch) => {
        try {
            await axios.post(
                `${apiUrl}/song`,
                {
                    catId: cat,
                    instrumentId: instrument,
                    song: song,
                    postName: name,
                    postDescription: description
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            dispatch(showMessageWithTimeout(
                "success",
                false,
                `Congratulation! ${name} song was saved!`,
                3500
            ));

            dispatch(clearRecordInLocalStorage());

        } catch (e) {
            console.log(e);
        }
    }
}