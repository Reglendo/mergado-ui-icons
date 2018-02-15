import * as React from "react";
export const IconThList = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--th-list ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M11.4 27.9v4.2q0 .9-.6 1.6t-1.5.6H2.1q-.9 0-1.5-.6T0 32.1v-4.2q0-.9.6-1.6t1.5-.6h7.2q.9 0 1.5.6t.6 1.6zm0-11.5v4.3q0 .9-.6 1.5t-1.5.7H2.1q-.9 0-1.5-.7T0 20.7v-4.3q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 27.9v4.2q0 .9-.6 1.6t-1.5.6H16.4q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h21.5q.9 0 1.5.6t.6 1.6zM11.4 5v4.3q0 .9-.6 1.5t-1.5.6H2.1q-.9 0-1.5-.6T0 9.3V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 16.4v4.3q0 .9-.6 1.5t-1.5.7H16.4q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h21.5q.9 0 1.5.6t.6 1.5zM40 5v4.3q0 .9-.6 1.5t-1.5.6H16.4q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h21.5q.9 0 1.5.6T40 5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconThList.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconThList.js.map