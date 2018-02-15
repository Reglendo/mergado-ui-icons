import * as React from "react";
export const IconPaintBrush = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--paint-brush ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M36 0q1.6 0 2.8 1T40 3.6Q40 5 39 7q-7.5 14-10.4 16.8-2.2 2-4.9 2-2.8 0-4.8-2t-2-4.9q0-2.9 2-4.8L33.1 1.2Q34.5 0 36 0zM15.8 23.1q.8 1.7 2.3 2.9t3.4 1.7v1.6q.1 4.7-2.9 7.7t-7.8 3Q8.1 40 6 39t-3.4-2.9-2-4.1-.6-4.9q.2.1.9.7t1.4 1 1.3.8 1 .4q1 0 1.3-.8.5-1.5 1.3-2.6t1.5-1.7 2-1 2.3-.6 2.8-.2z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconPaintBrush.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconPaintBrush.js.map