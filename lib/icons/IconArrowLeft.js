import * as React from "react";
export const IconArrowLeft = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--arrow-left ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M36.3 20v2.9q0 1.1-.7 2t-1.9.8H18l6.5 6.6q.9.8.9 2t-.9 2L22.8 38q-.8.8-2 .8-1.1 0-2-.8L4.3 23.4q-.9-.8-.9-2 0-1.1.9-2L18.8 4.9q.8-.9 2-.9t2 .9l1.7 1.6q.9.9.9 2.1t-.9 2L18 17.1h15.7q1.1 0 1.9.9t.7 2z" }))),
        !props.textFirst && textEl));
};
IconArrowLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowLeft;
//# sourceMappingURL=IconArrowLeft.js.map