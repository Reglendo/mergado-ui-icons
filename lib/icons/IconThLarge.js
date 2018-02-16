import * as React from "react";
export const IconThLarge = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--th-large ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M18.6 22.9v8.5q0 1.2-.8 2t-2 .9H4.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H4.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2zm20 17.2v8.5q0 1.2-.8 2t-2 .9H24.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H24.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2z" }))),
        !props.textFirst && textEl));
};
IconThLarge.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconThLarge;
//# sourceMappingURL=IconThLarge.js.map