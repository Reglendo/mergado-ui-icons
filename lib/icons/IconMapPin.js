import * as React from "react";
export const IconMapPin = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--map-pin ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M19.9 24.3q1.5 0 2.9-.3v14.6q0 .6-.4 1t-1 .4h-2.9q-.6 0-1-.4t-.4-1V24q1.3.3 2.8.3zm0-24.3q4.8 0 8.1 3.3t3.4 8.1-3.4 8.1-8.1 3.4-8.1-3.4-3.3-8.1 3.3-8.1T19.9 0zm0 5q.3 0 .5-.2t.2-.5-.2-.5-.5-.2q-3.2 0-5.5 2.3t-2.3 5.5q0 .3.2.5t.5.2.5-.2.2-.5q0-2.6 1.9-4.5T19.9 5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconMapPin.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconMapPin.js.map