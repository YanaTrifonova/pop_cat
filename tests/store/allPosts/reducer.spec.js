import reducer from "../../../src/store/allPosts/reducer";
import {GET_ALL_POSTS} from "../../../src/store/allPosts/action";
import {allPostsMock} from "../../allPostsMock";


describe("All posts reducer", () => {
    const initialState = [];
    const postMock = allPostsMock;
    const actionMock = {
        type: GET_ALL_POSTS,
        payload: postMock
    }

    test("should return the initial state", () => {
        expect(reducer(undefined, {
            type: "UNKNOWN"
        })).toEqual(initialState)
    });

    test("should handle GET_ALL_POSTS ", () => {
        expect(reducer([], actionMock)).toEqual(postMock)
    });
});