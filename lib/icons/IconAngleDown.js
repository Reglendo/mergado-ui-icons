import * as React from "react";
export const IconAngleDown = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--angle-down ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31 16.4q0 .3-.2.5L20.4 27.3q-.3.3-.5.3t-.6-.3L8.9 16.9q-.2-.2-.2-.5t.2-.5l1.2-1.1q.2-.2.5-.2t.5.2l8.8 8.8 8.7-8.8q.3-.2.5-.2t.6.2l1.1 1.1q.2.2.2.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconAngleDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconAngleDown.js.map