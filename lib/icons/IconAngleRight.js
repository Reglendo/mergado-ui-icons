import * as React from "react";
export const IconAngleRight = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--angle-right ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M26.3 21.4q0 .3-.2.5L15.7 32.3q-.3.3-.6.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.3-.2.5-.2t.6.2l10.4 10.4q.2.2.2.5z" }))),
        !props.textFirst && textEl));
};
IconAngleRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAngleRight;
//# sourceMappingURL=IconAngleRight.js.map