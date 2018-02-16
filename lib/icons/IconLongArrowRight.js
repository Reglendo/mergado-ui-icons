import * as React from "react";
export const IconLongArrowRight = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--long-arrow-right ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M39.1 19.9q0 .3-.3.6l-8.5 7.9q-.4.3-.8.1-.4-.2-.4-.6v-5H1.2q-.3 0-.5-.2t-.2-.6v-4.2q0-.4.2-.6t.5-.2h27.9v-5q0-.4.4-.6t.8.1l8.5 7.8q.3.2.3.5z" }))),
        !props.textFirst && textEl));
};
IconLongArrowRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLongArrowRight;
//# sourceMappingURL=IconLongArrowRight.js.map