import axios from "axios";
import {apiUrl} from "../../config/constants";

export const GET_MY_POSTS = "GET_MY_POSTS";

function getAllMyPosts(data) {
    return {
        type: GET_MY_POSTS,
        payload: data
    }
}

export const getData = (userId, token) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${apiUrl}/songs/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                }
            );
            dispatch(getAllMyPosts(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}