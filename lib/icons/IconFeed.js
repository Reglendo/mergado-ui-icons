import * as React from "react";
export const IconFeed = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--feed ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M13.1 30q0 1.8-1.3 3t-3 1.3T5.7 33t-1.2-3 1.3-3 3-1.3 3 1.3 1.3 3zm11.4 2.7q0 .7-.4 1.1-.4.5-1 .5h-3q-.6 0-1-.4t-.4-.9q-.5-5.1-4.2-8.7t-8.7-4.2q-.6 0-.9-.4t-.4-1v-3q0-.6.5-1 .3-.4.9-.4H6q3.6.3 6.9 1.8t5.8 4q2.5 2.6 4 5.8t1.8 6.8zm11.4.1q.1.6-.4 1-.4.5-1 .5h-3.2q-.6 0-1-.4t-.4-1q-.3-4.8-2.3-9.1t-5.1-7.5-7.5-5.1-9.2-2.3q-.5 0-.9-.5t-.4-.9V4.3q0-.6.4-1 .5-.4 1-.4H6q5.8.2 11.2 2.6t9.5 6.6q4.2 4.1 6.6 9.5t2.6 11.2z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconFeed.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconFeed.js.map