import * as React from "react";
export const IconToggleOn = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--toggle-on ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M0 20q0-2.5 1-4.8t2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8-1 4.8-2.7 4-3.9 2.6-4.9 1H12.4q-2.5 0-4.8-1t-4-2.6-2.6-4T0 20zm27.3 9.9q2 0 3.9-.7t3.2-2.2 2.1-3.1.8-3.9-.8-3.9-2.1-3.1-3.2-2.2-3.9-.7-3.8.7-3.2 2.2-2.1 3.1-.8 3.9.8 3.9 2.1 3.1 3.2 2.2 3.8.7z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconToggleOn.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconToggleOn.js.map