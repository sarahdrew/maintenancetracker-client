import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "../LandingPage/LandingPage";
import { BrowserRouter } from "react-router-dom";


describe("LandingPage class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})