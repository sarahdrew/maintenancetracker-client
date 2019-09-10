import React from "react";
import ReactDOM from "react-dom";
import RequestsForm from '../RequestsForm/RequestsForm';

describe("RequestsForm class component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(

            <RequestsForm />,

            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})