import * as React from "react";
export const IconAngleDoubleRight = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--angle-double-right ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M22.3 21.4q0 .3-.2.5L11.7 32.3q-.3.3-.6.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.3-.2.5-.2t.6.2l10.4 10.4q.2.2.2.5zm8.6 0q0 .3-.3.5L20.2 32.3q-.2.3-.5.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.2-.2.5-.2t.5.2l10.4 10.4q.3.2.3.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconAngleDoubleRight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconAngleDoubleRight.js.map