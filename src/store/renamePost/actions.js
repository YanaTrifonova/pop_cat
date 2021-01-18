import {apiUrl} from "../../config/constants";
import axios from "axios";

export const SET_NEW_POST_NAME = "SET_NEW_POST_NAME";
export const SET_NEW_POST_DESCRIPTION = "SET_NEW_POST_DESCRIPTION";
export const DELETE_YOUR_POST = "DELETE_YOUR_POST";

function setNewPostName(data) {
    return {
        type: SET_NEW_POST_NAME,
        payload: data,
    };
}

export const updatePostName = (postId, newName, token) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(
                `${apiUrl}/song/${postId}`,
                {
                    newName
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },
            );

            dispatch(setNewPostName(response.data));

        } catch (e) {
            console.log(e)
        }
    }
}

function setNewPostDescription(data) {
    return {
        type: SET_NEW_POST_DESCRIPTION,
        payload: data,
    };
}

export const updatePostDescription = (postId, newDescription, token) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(
                `${apiUrl}/song/${postId}`,
                {
                    newDescription
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },
            );

            dispatch(setNewPostDescription(response.data));

        } catch (e) {
            console.log(e)
        }
    }
}

function deleteYourPost(data) {
    return {
        type: DELETE_YOUR_POST,
        payload: data,
    };
}

export const deletePost = (postId, token) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/song/${postId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                },
            );

            dispatch(deleteYourPost(response.data))

        }catch (e) {
            console.log(e)
        }
    }
}