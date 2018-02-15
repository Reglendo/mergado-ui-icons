import * as React from "react";
export const IconChevronCircleDown = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--chevron-circle-down ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M21.1 29l10.2-10.1q.4-.5.4-1t-.4-1L29 14.6q-.4-.4-1-.4t-1 .4l-6.9 6.8-6.8-6.8q-.4-.4-1-.4t-1 .4L9 16.9q-.4.4-.4 1t.4 1L19.1 29q.5.4 1 .4t1-.4zm16.2-9q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconChevronCircleDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconChevronCircleDown.js.map