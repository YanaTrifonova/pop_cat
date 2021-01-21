import axios from "axios";
import {apiUrl} from "../../config/constants";

export const GET_ALL_POSTS = "GET_ALL_POSTS";

function getAllPosts(data) {
    return {
        type: GET_ALL_POSTS,
        payload: data
    }
}

export const getData = (userId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${apiUrl}/songs`,
                {
                    headers: {
                        userId: userId,
                    }
                },
            );
            dispatch(getAllPosts(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}