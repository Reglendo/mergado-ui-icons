import * as React from "react";
export const IconArrowRight = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--arrow-right ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M36.4 21.4q0 1.2-.9 2.1L21 38q-.9.8-2 .8-1.2 0-2-.8l-1.7-1.7q-.9-.8-.9-2t.9-2l6.5-6.6H6.1q-1.1 0-1.9-.8t-.7-2V20q0-1.2.7-2t1.9-.9h15.7l-6.5-6.5q-.9-.8-.9-2t.9-2L17 4.9q.8-.9 2-.9t2 .9l14.5 14.5q.9.8.9 2z" }))),
        !props.textFirst && textEl));
};
IconArrowRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowRight;
//# sourceMappingURL=IconArrowRight.js.map