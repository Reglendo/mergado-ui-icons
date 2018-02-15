import * as React from "react";
export const IconTripadvisor = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--tripadvisor ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M11.4 21.8q0 .7-.5 1.1t-1.1.5q-.7 0-1.2-.5t-.5-1.1q0-.7.5-1.2t1.2-.5q.6 0 1.1.5t.5 1.2zm20.2 0q0 .6-.5 1.1t-1.1.5-1.2-.5-.5-1.1.5-1.2 1.2-.5 1.1.5.5 1.1zm-18.2 0q0-1.4-1-2.4t-2.4-1-2.4 1-1 2.4 1 2.4 2.4.9 2.4-.9 1-2.4zm20.2 0q0-1.5-1-2.4t-2.4-1q-1.4 0-2.4 1t-1 2.4 1 2.3 2.4 1 2.4-1 1-2.4zm-18.7 0q0 2-1.4 3.4T10 26.7q-2 0-3.4-1.5t-1.5-3.4 1.5-3.5 3.4-1.4 3.5 1.4 1.4 3.5zm20.2 0q0 2-1.4 3.4t-3.5 1.4q-2 0-3.4-1.4t-1.5-3.4 1.5-3.5 3.4-1.4q2 0 3.5 1.4t1.4 3.5zm-16.9 0q0-3.3-2.4-5.7t-5.7-2.4q-2.2 0-4 1.1t-3 2.9T2 21.8t1.1 4.1 3 2.9 4 1.1q3.4 0 5.7-2.4t2.4-5.7zm11.7-10q-4.4-2-9.7-2-5.6 0-10.1 2 2.1 0 3.9.8t3.2 2.1 2.2 3.2.8 3.9q0-2 .7-3.8t2.1-3.2 3.1-2.2 3.8-.8zm8.4 10q0-3.3-2.4-5.7t-5.7-2.4-5.7 2.4-2.4 5.7 2.4 5.7 5.7 2.4 5.7-2.4 2.4-5.7zm-4.7-9.9h6.7q-.7.9-1.3 2t-.7 2q1.9 2.6 1.9 5.9 0 2.7-1.3 5t-3.7 3.7-5 1.3q-2.3 0-4.3-.9t-3.5-2.8q-.8 1-2.2 3.2-.2-.4-1-1.5t-1.3-1.7q-1.4 1.8-3.4 2.7t-4.4 1q-2.7 0-5-1.3t-3.7-3.7-1.3-5q0-3.3 1.9-5.9-.1-.9-.7-2t-1.3-2h6.4q2.6-1.8 6.2-2.7t7.6-1q3.9 0 7.3.9t6.1 2.8z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconTripadvisor.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconTripadvisor.js.map