import * as React from "react";
export const IconMousePointer = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--mouse-pointer ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M32.3 23.3q.7.7.3 1.5-.4.9-1.3.9h-8.5l4.4 10.6q.3.6 0 1.1t-.7.8l-4 1.7q-.5.2-1.1 0t-.7-.8L16.4 29l-7 7q-.4.4-1 .4-.2 0-.5-.1Q7 35.9 7 35V1.4q0-.9.9-1.3.3-.1.5-.1.6 0 1 .4z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconMousePointer.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconMousePointer.js.map