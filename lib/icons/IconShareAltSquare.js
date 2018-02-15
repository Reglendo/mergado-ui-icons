import * as React from "react";
export const IconShareAltSquare = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--share-alt-square ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.6 26.7q0-2-1.4-3.4t-3.4-1.4q-1.9 0-3.2 1.3l-5.4-2.7v-1l5.4-2.7q1.3 1.3 3.2 1.3 2 0 3.4-1.4t1.4-3.4-1.4-3.3-3.4-1.4-3.4 1.4-1.4 3.3q0 .2.1.5l-5.4 2.7q-1.4-1.3-3.2-1.3-2 0-3.4 1.4T8.7 20t1.4 3.4 3.4 1.4q1.8 0 3.2-1.3l5.4 2.7q-.1.3-.1.5 0 1.9 1.4 3.3t3.4 1.4 3.4-1.4 1.4-3.3zm5.7-17.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconShareAltSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconShareAltSquare.js.map