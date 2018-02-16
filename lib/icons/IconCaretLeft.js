import * as React from "react";
export const IconCaretLeft = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--caret-left ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M26.3 10v20q0 .6-.4 1t-1 .4-1-.4l-10-10q-.5-.4-.5-1t.5-1l10-10q.4-.4 1-.4t1 .4.4 1z" }))),
        !props.textFirst && textEl));
};
IconCaretLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCaretLeft;
//# sourceMappingURL=IconCaretLeft.js.map