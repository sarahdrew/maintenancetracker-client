import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css';

function Index() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

console.log(process.env)

ReactDOM.render(<Index />, document.getElementById('root'));