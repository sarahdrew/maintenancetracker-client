import React from "react";


export default function RequestsForm(props) {
    const { className, ...otherProps } = props;
    return (
        <form
            className={["Requests-form", className].join(" ")}
            action="#"
            {...otherProps}
        />
    );
}
