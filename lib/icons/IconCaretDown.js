import * as React from "react";
export const IconCaretDown = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--caret-down ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.4 15.7q0 .6-.5 1l-10 10q-.4.4-1 .4t-1-.4l-10-10q-.4-.4-.4-1t.4-1 1-.4h20q.6 0 1 .4t.5 1z" }))),
        !props.textFirst && textEl));
};
IconCaretDown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCaretDown;
//# sourceMappingURL=IconCaretDown.js.map