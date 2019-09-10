import React from "react";
import ReactDOM from "react-dom";
import CreateRequest from "../CreateRequest/CreateRequest";

describe("CreateRequest class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');

        ReactDOM.render(

            <CreateRequest />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})