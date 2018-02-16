import * as React from "react";
export const IconCoffee = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--coffee ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M36.2 14.4q0-1.7-1.2-2.9t-2.9-1.3h-1.4v8.4h1.4q1.7 0 2.9-1.2t1.2-3zM0 31.2h39q0 2.3-1.6 3.9t-4 1.6H5.6q-2.3 0-4-1.6T0 31.2zm40.4-16.8q0 3.5-2.4 5.9t-5.9 2.5h-1.4v.7q0 2-1.5 3.4t-3.4 1.5H10.5q-2.1 0-3.5-1.5t-1.4-3.4v-16q0-.6.4-1t1-.4h25.1q3.4 0 5.9 2.4t2.4 5.9z" }))),
        !props.textFirst && textEl));
};
IconCoffee.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCoffee;
//# sourceMappingURL=IconCoffee.js.map