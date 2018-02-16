import * as React from "react";
export const IconCodeFork = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--code-fork ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M14.9 32.9q0-.9-.6-1.6t-1.5-.6-1.5.6-.7 1.6.7 1.5 1.5.6 1.5-.6.6-1.5zm0-25.8q0-.8-.6-1.5T12.8 5t-1.5.6-.7 1.5.7 1.6 1.5.6 1.5-.6.6-1.6zM29.2 10q0-.9-.6-1.5t-1.5-.6-1.5.6-.7 1.5.7 1.5 1.5.6 1.5-.6.6-1.5zm2.2 0q0 1.2-.6 2.2t-1.6 1.5q0 6.4-5 9.2-1.6.9-4.6 1.9-2.8.8-3.7 1.5t-1 2.3v.5q1 .6 1.6 1.6t.6 2.2q0 1.7-1.3 3t-3 1.2-3.1-1.2-1.2-3q0-1.2.6-2.2t1.5-1.5V10.8q-.9-.5-1.5-1.5t-.6-2.2q0-1.7 1.3-3t3-1.2 3 1.2 1.3 3q0 1.2-.6 2.2t-1.6 1.5v11.1q1.2-.5 3.5-1.2 1.2-.4 1.9-.7t1.6-.7 1.3-.9.9-1.1.6-1.6.2-2q-1-.6-1.5-1.5t-.6-2.2q0-1.8 1.2-3t3.1-1.3 3 1.3 1.3 3z" }))),
        !props.textFirst && textEl));
};
IconCodeFork.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCodeFork;
//# sourceMappingURL=IconCodeFork.js.map