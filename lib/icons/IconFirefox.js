import * as React from "react";
export const IconFirefox = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--firefox ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M20.2 40q-6.4 0-11.3-3.4t-7.4-8.9Q.2 24.8 0 21t.6-7.4 2.5-7 4-5.4l-.2 6.3q.2-.3 1.5-.3t1.5.3q1-1.8 3.6-3.1t5.3-1.3q-1.3 1-2.7 3.3t-1.3 3.7q.5.1 1.4.3t1.4.1 1.5.1 1.1.1q.4.1.2 1t-.6 1.7q-.2.1-.4.4t-1.3.8-2.2.8l.3 4.2-3.1-1.5q-.4.9-.2 1.8t.8 1.5 1.5.9 1.8.2q1.1-.2 2.2-.8t1.9-1 1.6-.4q1.4.1 2 .7t.4 1.5v.1q0 .1-.2.3t-.4.3-.7.3-1.1 0q-1.3 2.1-3.2 3t-4.7.7q1.7 1.3 3.7 1.8t3.7.1 3.5-1.1 2.8-2 1.8-2.3q1-2 .9-4.3t-.8-4.2-1.8-2.8q2 .9 3.1 1.8t1.7 2.5q.3-3.8-1.3-7.7t-4.7-6.3q6 1.7 9.2 6.2T40 20.5q0 2.8-.9 5.7t-2.8 5.3-4.2 4.4-5.5 3-6.4 1.1z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconFirefox.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconFirefox.js.map