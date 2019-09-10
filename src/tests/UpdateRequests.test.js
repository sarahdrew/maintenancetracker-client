import React from "react";
import ReactDOM from "react-dom";
import UpdateRequest from "../UpdateRequest/UpdateRequest";
import RequestsContext from "../contexts/RequestsContext";

beforeEach(() => {
    jest.resetModules();
});

describe("UpdateRequest class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <RequestsContext.Provider value={{ request: { title: "Test title", description: "Test", status: "test", message: "test" } }}>
                <UpdateRequest />
            </RequestsContext.Provider>

            ,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})