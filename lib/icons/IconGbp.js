import * as React from "react";
export const IconGbp = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--gbp ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.3 25.4v8.2q0 .3-.2.5t-.5.2H9.2q-.3 0-.5-.2t-.2-.5v-3.4q0-.3.2-.5t.5-.2h2.2V21H9.3q-.4 0-.6-.2t-.2-.6v-2.9q0-.3.2-.5t.6-.2h2.1v-5q0-3.8 2.7-6.3t7.1-2.4q4.1 0 7.4 2.7.2.2.3.5t-.2.5l-2.3 2.8q-.2.3-.5.3-.3.1-.5-.1-.1-.2-.6-.5t-1.5-.7-2.1-.4q-1.9 0-3.1 1.1T17 11.8v4.8h6.8q.3 0 .5.2t.2.5v2.9q0 .3-.2.5t-.5.3H17v8.4h9.2v-4q0-.3.2-.5t.5-.2h3.7q.3 0 .5.2t.2.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconGbp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconGbp.js.map