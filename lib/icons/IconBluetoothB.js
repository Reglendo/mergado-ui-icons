import * as React from "react";
export const IconBluetoothB = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--bluetooth-b ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M21.8 31.8l3.9-3.9-3.9-3.8v7.7zm0-15.9l3.9-3.8-3.9-3.9v7.7zm.7 4.1l8 7.9L18.4 40V24.1l-6.6 6.6-2.4-2.4 8.3-8.3-8.3-8.3 2.4-2.4 6.6 6.6V0l12.1 12.1z" }))),
        !props.textFirst && textEl));
};
IconBluetoothB.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBluetoothB;
//# sourceMappingURL=IconBluetoothB.js.map