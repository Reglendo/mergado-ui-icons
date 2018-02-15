import * as React from "react";
export const IconGenderless = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--genderless ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M29.9 21.4q0-4.1-3-7t-7-3-7.1 3-2.9 7 2.9 7.1 7.1 2.9 7-2.9 3-7.1zm2.8 0q0 2.6-1 5T29 30.5t-4.2 2.8-4.9 1-5-1-4.1-2.8T8 26.4t-1-5 1-5 2.8-4.1 4.1-2.7 5-1 4.9 1 4.2 2.7 2.7 4.1 1 5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconGenderless.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconGenderless.js.map