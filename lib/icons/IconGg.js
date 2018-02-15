import * as React from "react";
export const IconGg = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--gg ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M14.3 18.1l7.4 7.5-7.4 7.4L1.2 20 14.3 7l3.2 3.2-1.8 1.9-1.4-1.4L5 20l9.3 9.3 3.7-3.7-5.6-5.6zM25.5 7l13 13-13 13-3.3-3.2 1.9-1.9 1.4 1.4 9.3-9.3-9.3-9.3-3.8 3.7 5.6 5.6-1.8 1.9-7.5-7.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconGg.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconGg.js.map