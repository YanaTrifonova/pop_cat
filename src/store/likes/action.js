import axios from "axios";
import {apiUrl} from "../../config/constants";

export const DELETE_LIKE = "DELETE_LIKE";
export const SET_LIKE = "SET_LIKE";

function deleteYourLike(data) {
    return {
        type: DELETE_LIKE,
        payload: data
    }
}

function setYourLike(data) {
    return {
        type: SET_LIKE,
        payload: data
    }
}

export const toggleLikeButtonCounter = (userId, postId, isLiked, token) => {
    return async (dispatch) => {
        try {
            if (isLiked) {
                console.log("IF isLiked=", isLiked)

                await axios.delete(
                    `${apiUrl}/like/${userId}/${postId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                dispatch(deleteYourLike("-1"));

            } else {
                console.log("ELSE isLiked=", isLiked)

                await axios.put(
                    `${apiUrl}/like`,
                    {
                        userId: userId,
                        postId: postId
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                dispatch(setYourLike("+1"));

            }

        } catch (e) {
            console.log(e);
        }
    }
}