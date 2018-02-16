import * as React from "react";
export const IconChevronUp = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--chevron-up ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.6 29.7l-3.7 3.7q-.5.4-1 .4t-1-.4L20 21.5 8.2 33.4q-.5.4-1.1.4t-1-.4l-3.7-3.7q-.4-.4-.4-1t.4-1L19 11.1q.4-.4 1-.4t1 .4l16.6 16.6q.4.4.4 1t-.4 1z" }))),
        !props.textFirst && textEl));
};
IconChevronUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChevronUp;
//# sourceMappingURL=IconChevronUp.js.map