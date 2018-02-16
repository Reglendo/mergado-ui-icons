import * as React from "react";
export const IconLongArrowLeft = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--long-arrow-left ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M39 17.9v4.2q0 .3-.2.5t-.5.2H11.2v4.9q0 .4-.5.6t-.7-.1l-8.4-7.6q-.2-.3-.2-.5 0-.3.2-.6l8.4-7.7q.3-.3.7-.1.4.2.4.6v4.9h27.2q.3 0 .5.2t.2.5z" }))),
        !props.textFirst && textEl));
};
IconLongArrowLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLongArrowLeft;
//# sourceMappingURL=IconLongArrowLeft.js.map