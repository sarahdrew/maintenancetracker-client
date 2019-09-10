import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import AllRequests from "../AllRequests/AllRequests";

describe("AllRequests class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <AllRequests />
            </BrowserRouter >,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})