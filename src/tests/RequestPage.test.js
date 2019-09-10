import React from "react";
import ReactDOM from "react-dom";
import RequestPage from "../RequestPage/RequestPage";
import RequestsContext from "../contexts/RequestsContext";

beforeEach(() => {
    jest.resetModules();
});






describe("RequestPage class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <RequestsContext.Provider value={{ request: { title: "Test title", description: "Test", status: "test", message: "test" } }}>
                <RequestPage />
            </RequestsContext.Provider>

            ,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})