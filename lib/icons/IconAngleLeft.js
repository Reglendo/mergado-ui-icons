import * as React from "react";
export const IconAngleLeft = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--angle-left ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M26.5 12.1q0 .3-.2.6l-8.8 8.7 8.8 8.8q.2.2.2.5t-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3L13.7 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.5-.2t.6.2l1.1 1.1q.2.2.2.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconAngleLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconAngleLeft.js.map