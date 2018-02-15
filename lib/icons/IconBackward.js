import * as React from "react";
export const IconBackward = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--backward ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M36.1 3.1q.5-.4.8-.2t.2.7v32.8q0 .6-.2.7t-.8-.2L20.3 21q-.2-.2-.3-.4v15.8q0 .6-.3.7t-.7-.2L3.1 21q-.4-.4-.4-1t.4-1L19 3.1q.4-.4.7-.2t.3.7v15.8q.1-.2.3-.4z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconBackward.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconBackward.js.map