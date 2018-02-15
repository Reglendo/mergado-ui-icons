import * as React from "react";
export const IconGooglePlus = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--google-plus ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M25.2 20.3q0 3.6-1.6 6.5t-4.3 4.4-6.5 1.6q-2.6 0-5-1t-4.1-2.7T1 25t-1-5 1-5 2.7-4.1 4.1-2.7 5-1q5 0 8.6 3.3l-3.5 3.4q-2-2-5.1-2-2.1 0-4 1.1T6 15.9 4.9 20 6 24.1 8.8 27t4 1.1q1.5 0 2.7-.4t2-1 1.4-1.4.8-1.4.4-1.3h-7.3v-4.4h12.1q.3 1.1.3 2.1zm15.1-2.1v3.6h-3.6v3.7H33v-3.7h-3.7v-3.6H33v-3.7h3.7v3.7h3.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconGooglePlus.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconGooglePlus.js.map