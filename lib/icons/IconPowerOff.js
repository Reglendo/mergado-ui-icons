import * as React from "react";
export const IconPowerOff = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--power-off ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3-6.6-1.3T8 32.1t-3.6-5.4T3 20q0-4.1 1.8-7.7t5-6q1-.7 2.2-.5t1.8 1.1q.8.9.6 2.1t-1.1 1.9q-2.2 1.6-3.4 4T8.7 20q0 2.3.9 4.4t2.5 3.7 3.6 2.4 4.4.9 4.5-.9 3.6-2.4 2.5-3.7.9-4.4q0-2.7-1.2-5.1t-3.4-4q-.9-.7-1.1-1.9t.5-2.1q.7-1 1.9-1.1t2.1.5q3.3 2.4 5.1 6t1.8 7.7zM23 2.9v14.2q0 1.2-.8 2.1t-2.1.8-2-.8-.8-2.1V2.9q0-1.2.8-2.1t2-.8 2.1.8.8 2.1z" }))),
        !props.textFirst && textEl));
};
IconPowerOff.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPowerOff;
//# sourceMappingURL=IconPowerOff.js.map