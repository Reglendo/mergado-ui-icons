import * as React from "react";
export const IconCheck = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--check ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.3 12.6q0 .9-.6 1.6L17.5 33.3q-.6.7-1.5.7t-1.6-.7L3.3 22.2q-.6-.6-.6-1.5t.6-1.5l3.1-3q.6-.7 1.5-.7t1.5.7l6.6 6.5L30.6 8.1q.6-.6 1.5-.6t1.5.6l3.1 3q.6.6.6 1.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconCheck.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconCheck.js.map