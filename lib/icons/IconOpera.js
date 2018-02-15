import * as React from "react";
export const IconOpera = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--opera ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M33.3 5.1q-3.7-2.5-8-2.5-3.4 0-6.5 1.7t-5.4 4.4q-1.7 2.1-2.7 4.9t-1 5.9v1q.1 3.1 1 5.9t2.7 4.9q2.3 2.8 5.4 4.4t6.5 1.7q4.3 0 8-2.5-2.7 2.4-6.1 3.8T20 40h-1q-3.9-.2-7.4-1.9t-6.1-4.3-4-6.2T0 20q0-4.1 1.6-7.8t4.2-6.4 6.4-4.2T20 0h.1q3.7 0 7.1 1.4t6.1 3.7zM40 20q0 4.3-1.7 8.1t-4.8 6.6q-2.3 1.4-4.9 1.4-3.1 0-5.7-1.9 3.4-1.2 5.6-5.2t2.3-9q0-5.1-2.3-9t-5.6-5.2q2.7-1.9 5.7-1.9 2.6 0 5 1.5 3 2.7 4.7 6.5T40 20z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconOpera.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconOpera.js.map