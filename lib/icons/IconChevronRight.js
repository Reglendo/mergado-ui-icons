import * as React from "react";
export const IconChevronRight = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--chevron-right ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.2 19.6L14.6 36.1q-.4.5-1 .5t-1-.5l-3.7-3.7q-.4-.4-.4-1t.4-1l11.9-11.8L8.9 6.7q-.4-.4-.4-1t.4-1L12.6 1q.5-.4 1-.4t1 .4l16.6 16.6q.4.4.4 1t-.4 1z" }))),
        !props.textFirst && textEl));
};
IconChevronRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChevronRight;
//# sourceMappingURL=IconChevronRight.js.map