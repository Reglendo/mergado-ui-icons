import * as React from "react";
export const IconServer = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--server ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M2.9 31.4h22.8v-2.8H2.9v2.8zm0-11.4h22.8v-2.9H2.9V20zm35 10q0-.9-.7-1.5t-1.5-.6-1.5.6-.6 1.5.6 1.5 1.5.6 1.5-.6.7-1.5zM2.9 8.6h22.8V5.7H2.9v2.9zm35 10q0-.9-.7-1.5t-1.5-.7-1.5.7-.6 1.5.6 1.5 1.5.6 1.5-.6.7-1.5zm0-11.5q0-.8-.7-1.5T35.7 5t-1.5.6-.6 1.5.6 1.6 1.5.6 1.5-.6.7-1.6zM40 25.7v8.6H0v-8.6h40zm0-11.4v8.6H0v-8.6h40zm0-11.4v8.5H0V2.9h40z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconServer.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconServer.js.map