import * as React from "react";
export const IconICursor = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--i-cursor ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M28.6 2.9q-7.2 0-7.2 5v9.2h2.9V20h-2.9v12.1q0 5 7.2 5H30V40h-1.4q-6.1 0-8.6-3.3-2.5 3.3-8.6 3.3H10v-2.9h1.4q7.2 0 7.2-5V20h-2.9v-2.9h2.9V7.9q0-5-7.2-5H10V0h1.4q6.1 0 8.6 3.3Q22.5 0 28.6 0H30v2.9h-1.4z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconICursor.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconICursor.js.map