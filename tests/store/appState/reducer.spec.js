import reducer from "../../../src/store/appState/reducer";
import {APP_DONE_LOADING, APP_LOADING, CLEAR_MESSAGE, SET_MESSAGE} from "../../../src/store/appState/actions";
import * as types from "../../../src/store/appState/actions";

describe("All posts reducer", () => {
    const initialState = {
        loading: false,
        message: null
    };

    test("should return the initial state", () => {
        expect(reducer(undefined, {
            type: "UNKNOWN"
        })).toEqual(initialState)
    });

    test("should handle APP_LOADING", () => {
        expect(reducer(initialState, {
            type: types.APP_LOADING,
            payload: null
        })).toEqual({
            loading: true,
            message: null
        })
    });

    test("should handle APP_DONE_LOADING", () => {
        expect(reducer(initialState, {
            type: types.APP_DONE_LOADING,
            payload: null
        })).toEqual({
            loading: false,
            message: null
        })
    });

    test("should handle SET_MESSAGE", () => {
        expect(reducer(initialState, {
            type: types.SET_MESSAGE,
            payload: "message"
        })).toEqual({
            loading: false,
            message: "message"
        })
    });

    test("should handle CLEAR_MESSAGE", () => {
        expect(reducer(initialState, {
            type: types.CLEAR_MESSAGE,
            payload: null
        })).toEqual({
            loading: false,
            message: null
        })
    });
});