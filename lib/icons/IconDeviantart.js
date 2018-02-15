import * as React from "react";
export const IconDeviantart = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--deviantart ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.4 6.8l-6.8 13 .5.6h6.3v9.3H20l-.9.7-3.2 6.1-.7.6H8.5v-6.7l6.8-13-.6-.7H8.5V7.4h11.3l1-.6L24 .7l.6-.7h6.8v6.8z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconDeviantart.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconDeviantart.js.map