import * as React from "react";
export const IconAngleDoubleUp = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--angle-double-up ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31 29.3q0 .3-.2.5l-1.1 1.1q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.1q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.3.6-.3t.5.3l10.4 10.4q.2.2.2.5zm0-8.6q0 .3-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3l-8.7-8.7-8.8 8.7q-.2.3-.5.3t-.5-.3l-1.2-1.1q-.2-.2-.2-.5t.2-.5L19.3 9.8q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconAngleDoubleUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconAngleDoubleUp.js.map