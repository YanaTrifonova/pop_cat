import axios from "axios";
import {apiUrl} from "../../config/constants";

export const PRE_LOAD_CATS = "PRE_LOAD_CATS";
export const PRE_LOAD_INSTRUMENTS = "PRE_LOAD_INSTRUMENTS";

function addCatsToLocalStorage(data) {
    const localStorage = window.localStorage;

    if (localStorage.getItem("cats") === null) {
        localStorage.setItem("cats", JSON.stringify(data));
    }

    return {
        type: PRE_LOAD_CATS,
        payload: true,
    };
}

export const preLoadCats = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${apiUrl}/cats`);
            dispatch(addCatsToLocalStorage(response.data));

        } catch (e) {
            console.log(e);
        }
    }
}

function addInstrumentsToLocalStorage(data) {
    const localStorage = window.localStorage;

    if (localStorage.getItem("instruments") === null) {
        localStorage.setItem("instruments", JSON.stringify(data));
    }

    return {
        type: PRE_LOAD_INSTRUMENTS,
        payload: true,
    };
}

export const preLoadInstruments = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${apiUrl}/instruments`);
            dispatch(addInstrumentsToLocalStorage(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}