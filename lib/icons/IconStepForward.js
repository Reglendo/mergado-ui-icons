import * as React from "react";
export const IconStepForward = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--step-forward ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M9.5 36.9q-.4.4-.7.2t-.3-.7V3.6q0-.6.3-.7t.7.2L25.4 19l.2.4V4.3q0-.6.5-1t1-.4h2.8q.6 0 1 .4t.5 1v31.4q0 .6-.5 1t-1 .4h-2.8q-.6 0-1-.4t-.5-1V20.6l-.2.4z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconStepForward.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconStepForward.js.map