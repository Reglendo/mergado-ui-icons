import * as React from "react";
export const IconPlug = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--plug ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M39.2 10.1q.8.8.8 2t-.8 2.1l-9 8.9 3.4 3.3L30 30q-3.6 3.6-8.7 4.2t-9.2-2.3L4 40H0v-4l8.1-8.1q-2.8-4.1-2.3-9.2T10 10l3.6-3.6 3.3 3.4 8.9-9q.9-.8 2.1-.8t2 .8.8 2-.8 2.1L21 13.8l5.2 5.2 8.9-8.9q.9-.8 2.1-.8t2 .8z" }))),
        !props.textFirst && textEl));
};
IconPlug.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPlug;
//# sourceMappingURL=IconPlug.js.map