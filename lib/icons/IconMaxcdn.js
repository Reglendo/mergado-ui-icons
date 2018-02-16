import * as React from "react";
export const IconMaxcdn = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--maxcdn ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M39.5 17.3l-3.7 17h-7.5l4-18.6q.3-1.2-.3-1.9-.6-.8-1.9-.8h-3.8l-4.5 21.3h-7.5L18.9 13h-6.4L8 34.3H.5L5.1 13 1.6 5.7h28.5q2.3 0 4.2.9t3.3 2.6q1.4 1.6 1.9 3.7t0 4.4z" }))),
        !props.textFirst && textEl));
};
IconMaxcdn.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMaxcdn;
//# sourceMappingURL=IconMaxcdn.js.map