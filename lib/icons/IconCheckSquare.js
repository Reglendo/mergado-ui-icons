import * as React from "react";
export const IconCheckSquare = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--check-square ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M18.3 29L32 15.3q.4-.4.4-1t-.4-1L29.7 11q-.4-.4-1-.4t-1 .4L17.3 21.4l-4.7-4.7q-.4-.4-1-.4t-1 .4L8.3 19q-.4.4-.4 1t.4 1l8 8q.4.4 1 .4t1-.4zm19-19.7v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
        !props.textFirst && textEl));
};
IconCheckSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCheckSquare;
//# sourceMappingURL=IconCheckSquare.js.map