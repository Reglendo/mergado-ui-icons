import * as React from "react";
export const IconGraduationCap = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--graduation-cap ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.1 18.9l.3 5.6q0 1.2-1.5 2.2t-4.1 1.7-5.6.6-5.7-.6-4.1-1.7T9 24.5l.3-5.6 10 3.2q.4.1.9.1t.8-.1zm9.2-5.6q0 .4-.3.5L20.3 20H20L8.6 16.4q-.8.6-1.3 1.9t-.6 3.2q1.1.6 1.1 1.9 0 1.2-1 1.8l1 7.6q.1.3-.1.5-.2.1-.4.1H3.9q-.2 0-.4-.1-.2-.2-.1-.5l1-7.6q-1-.6-1-1.8 0-1.3 1.1-2 .2-3.6 1.7-5.8L.4 13.8q-.4-.1-.4-.5t.4-.6L20 6.6h.3l19.6 6.1q.4.2.4.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconGraduationCap.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconGraduationCap.js.map