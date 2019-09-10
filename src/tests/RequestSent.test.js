import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RequestSent from "../RequestSent/RequestSent";

describe("RequestSent class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <RequestSent />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})