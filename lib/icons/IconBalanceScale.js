import * as React from "react";
export const IconBalanceScale = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--balance-scale ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.5 11.8l-7 12.9h14zm-23.3 0l-7 12.9h14zm14.9-3.5q-.2.8-.8 1.3t-1.3.9V34h11.1q.2 0 .4.2t.2.4v1.1q0 .3-.2.5t-.4.1H7.6q-.3 0-.4-.1t-.2-.5v-1.1q0-.3.2-.4t.4-.2h11.1V10.5q-.8-.3-1.3-.9t-.9-1.3H7.6q-.3 0-.4-.1T7 7.8V6.6q0-.3.2-.4t.4-.2h8.9q.4-1 1.3-1.7t2-.6 2 .6T23.1 6h9q.2 0 .4.2t.2.4v1.2q0 .2-.2.4t-.4.1h-9zm-3.3.3q.6 0 1.1-.4t.4-1-.4-1.1-1.1-.4-1 .4-.4 1.1.4 1 1 .4zm19.8 16.1q0 1.3-.8 2.4t-2.1 1.6-2.7.9-2.5.3-2.6-.3-2.6-.9-2.1-1.6-.9-2.4q0-.2.7-1.5t1.6-3.2 2-3.6 1.8-3.3 1.1-1.8q.3-.6 1-.6t1 .6q.1.1 1 1.8t1.9 3.3 1.9 3.6 1.7 3.2.6 1.5zm-23.3 0q0 1.3-.8 2.4t-2.2 1.6-2.6.9-2.5.3-2.6-.3-2.6-.9-2.2-1.6-.8-2.4q0-.2.6-1.5T2.3 20t2-3.6 1.8-3.3 1-1.8q.4-.6 1.1-.6t1 .6q.1.1 1 1.8t1.9 3.3T14 20t1.7 3.2.6 1.5z" }))),
        !props.textFirst && textEl));
};
IconBalanceScale.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBalanceScale;
//# sourceMappingURL=IconBalanceScale.js.map