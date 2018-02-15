import * as React from "react";
export const IconForward = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--forward ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M4 36.9q-.4.4-.7.2t-.3-.7V3.6q0-.6.3-.7t.7.2L19.9 19l.2.4V3.6q0-.6.3-.7t.7.2L37 19q.4.4.4 1t-.4 1L21.1 36.9q-.4.4-.7.2t-.3-.7V20.6l-.2.4z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconForward.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconForward.js.map