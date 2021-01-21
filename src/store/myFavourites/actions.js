import axios from "axios";
import {apiUrl} from "../../config/constants";

export const GET_FAVOURITES_POSTS = "GET_FAVOURITES_POSTS";

function getAllMyPosts(data) {
    return {
        type: GET_FAVOURITES_POSTS,
        payload: data
    }
}

export const getData = (userId, token) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${apiUrl}/favourites`,
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