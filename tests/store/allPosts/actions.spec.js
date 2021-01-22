import {GET_ALL_POSTS, getAllPosts, getData} from "../../../src/store/allPosts/action";
import axios from "axios";
import 'regenerator-runtime/runtime';

jest.mock("axios");

describe("getData action", () => {
    test("should return an action object", () => {
        const data = [{}, {}];
        const expected = {
            type: GET_ALL_POSTS,
            payload: data,
        };

        const action = getAllPosts(data);
        expect(action).toEqual(expected);
    });

    test("action.payload should have the same length as the argument given", () => {
        const data = [{}, {}];

        const expected = {
            type: GET_ALL_POSTS,
            payload: data,
        };

        const action = getAllPosts(data);
        expect(action.payload.length).toEqual(expected.payload.length);
    });

    test("should return null if null passed as action", () => {
        const data = null;

        const expected = {
            type: GET_ALL_POSTS,
            payload: null,
        };

        const action = getAllPosts(data);
        expect(action).toEqual(expected);
    });

    test("should dispatch an action GET_ALL_POSTS", async () => {
        const fakeData = [{}, {}];
        const response = {data: fakeData};

        axios.get.mockImplementationOnce(() => Promise.resolve(response));
        const dispatch = jest.fn();
        await getData()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(getAllPosts(fakeData));
    });

    test(
        "should not dispatch an action GET_ALL_POSTS if axios response was not successfully resolved",
        async () => {
            const fakeData = [{}, {}];
            const response = {data: fakeData};

            try {
                axios.get.mockImplementationOnce(() => Promise.reject(response));
            } catch (error) {
                expect(error).toBeInstanceOf(TypeError);
            }

            const dispatch = jest.fn();
            await getData()(dispatch);

            expect(dispatch).not.toHaveBeenCalledWith(getAllPosts(fakeData));
        }
    );
})