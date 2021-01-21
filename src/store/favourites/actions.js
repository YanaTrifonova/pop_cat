import axios from "axios";
import {apiUrl} from "../../config/constants";

export const DELETE_FAVOURITES = "DELETE_FAVOURITES";
export const SET_FAVOURITES = "SET_FAVOURITES";

function deleteYourFavourite(data) {
    return {
        type: DELETE_FAVOURITES,
        payload: data
    }
}

function setYourFavourite(data) {
    return {
        type: SET_FAVOURITES,
        payload: data
    }
}

export const toggleFavouriteButtonCounter = (userId, postId, isFavourite, token) => {
    return async (dispatch) => {
        try {
            if (isFavourite) {
                console.log("IF isFavourite", isFavourite);

                await axios.delete(
                    `${apiUrl}/favourite/${userId}/${postId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                dispatch(deleteYourFavourite("-1"));

            } else {
                console.log("ELSE isFavourite=", isFavourite)

                await axios.put(
                    `${apiUrl}/favourite`,
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

                dispatch(setYourFavourite("+1"));

            }

        } catch (e) {
            console.log(e);
        }
    }
}