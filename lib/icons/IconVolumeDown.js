import * as React from "react";
export const IconVolumeDown = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--volume-down ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M24.1 7.9v24.2q0 .6-.4 1t-1 .5-1-.5l-7.4-7.4H8.4q-.6 0-1-.4t-.4-1v-8.6q0-.6.4-1t1-.4h5.9l7.4-7.4q.4-.5 1-.5t1 .5.4 1zM32.7 20q0 1.7-.9 3.2t-2.5 2q-.3.2-.6.2-.6 0-1-.5t-.4-1q0-.4.2-.8t.7-.5.7-.5.7-.8.3-1.3-.3-1.3-.7-.8-.7-.5-.7-.5-.2-.8q0-.6.4-1t1-.5q.3 0 .6.2 1.5.6 2.5 2t.9 3.2z" }))),
        !props.textFirst && textEl));
};
IconVolumeDown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconVolumeDown;
//# sourceMappingURL=IconVolumeDown.js.map