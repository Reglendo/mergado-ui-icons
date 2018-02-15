import * as React from "react";
export const IconTasks = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--tasks ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M22.9 31.4h14.2v-2.8H22.9v2.8zM14.3 20h22.8v-2.9H14.3V20zM28.6 8.6h8.5V5.7h-8.5v2.9zM40 27.1v5.8q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-5.8q0-.5.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-11.4v5.7q0 .6-.4 1t-1 .5H1.4q-.6 0-1-.5t-.4-1v-5.7q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-11.4V10q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4T0 10V4.3q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconTasks.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconTasks.js.map