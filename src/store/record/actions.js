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

export const clearRecord = () => {
    return {
        type: CLEAR_STATE,
        payload: []
    }
}