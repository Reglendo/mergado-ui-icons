import * as React from "react";
export const IconGitlab = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--gitlab ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M2.3 15.8L20 38.4.6 24.4q-.4-.3-.5-.8t0-1l2.2-6.8zm10.3 0h14.8L20 38.4zM8.2 2.1l4.4 13.7H2.3L6.7 2.1q.2-.5.8-.5t.7.5zm29.5 13.7l2.2 6.8q.2.5 0 1t-.5.8L20 38.4l17.7-22.6zm0 0H27.4l4.4-13.7q.2-.5.7-.5t.8.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconGitlab.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconGitlab.js.map