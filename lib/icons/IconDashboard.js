import * as React from "react";
export const IconDashboard = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--dashboard ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M8.6 25.7q0-1.2-.9-2t-2-.8-2 .8-.8 2 .8 2 2 .9 2-.9.9-2zm4.3-10q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm9.5 10.7l2.3-8.5q.1-.6-.2-1.1t-.9-.6-1 .1-.7.9l-2.3 8.5q-1.3.1-2.3 1t-1.5 2.2q-.4 1.7.5 3.3t2.6 2 3.3-.5 2-2.6q.3-1.3-.2-2.6t-1.6-2zm14.7-.7q0-1.2-.8-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.8-2zM22.9 11.4q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm10 4.3q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm7.1 10q0 5.8-3.1 10.8-.5.6-1.3.6H4.4q-.8 0-1.3-.6Q0 31.6 0 25.7q0-4 1.6-7.8t4.2-6.3 6.4-4.3T20 5.7t7.8 1.6 6.4 4.3 4.2 6.3 1.6 7.8z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconDashboard.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconDashboard.js.map