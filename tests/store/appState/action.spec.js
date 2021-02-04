import axios from "axios";
import 'regenerator-runtime/runtime';
import {
    CLEAR_MESSAGE,
    clearMessage,
    SET_MESSAGE,
    setMessage,
    showMessageWithTimeout
} from "../../../src/store/appState/actions";

jest.mock("axios");
jest.useFakeTimers();
describe("appState action", () => {
    const payloadMock = {
        variant: "variant",
        dismissable: false,
        text: "text"
    }

    const stateMock = {
        type: SET_MESSAGE,
        payload: payloadMock,
    }

    test("should return an action object", () => {
        const action = setMessage("variant", false, "text");
        expect(action).toEqual(stateMock);
    });

    test("should dispatch an action SET_MESSAGE", async () => {
        const response = {data: payloadMock};

        axios.get.mockImplementationOnce(() => Promise.resolve(response));
        const dispatch = jest.fn();
        await showMessageWithTimeout("variant", false, "text", 1000)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(setMessage("variant", false, "text"));
    });


    test("s2E", async () => {
        const response = {data: payloadMock};

        axios.get.mockImplementationOnce(() => Promise.resolve(response));

        const dispatch = jest.fn();
        await showMessageWithTimeout("variant", true, "text", 1000)(dispatch);
        jest.runAllTimers();

        expect(dispatch.mock.calls)
            .toEqual([[setMessage("variant", true, "text")], [clearMessage({type: "CLEAR_MESSAGE"})]]);
        // expect(dispatch).toHaveBeenCalledWith(clearMessage)
    });
})