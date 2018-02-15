import * as React from "react";
export const IconExternalLinkSquare = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--external-link-square ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.6 20.7V10q0-.6-.5-1t-1-.4H19.4q-.9 0-1.3.8-.4 1 .3 1.6l3.2 3.2L9.7 26.1q-.4.5-.4 1t.4 1l2.3 2.3q.4.4 1 .4t1-.4l11.9-11.9 3.2 3.2q.4.4 1 .4.3 0 .6-.1.9-.3.9-1.3zm5.7-11.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconExternalLinkSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconExternalLinkSquare.js.map