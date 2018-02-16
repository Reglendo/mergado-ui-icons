import * as React from "react";
export const IconStarHalfEmpty = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--star-half-empty ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M28 21.4l5.7-5.6-9.4-1.4-.7-1.3-3.5-7.2v21.5l1.3.7 7.1 3.7-1.4-7.9-.2-1.5zm10.1-5.9L30 23.4l1.9 11.2q.1.7-.2 1.1t-.7.4q-.4 0-.9-.2l-10-5.3-10 5.3q-.6.2-.9.2-.6 0-.8-.4t-.1-1.1l1.9-11.2-8.1-7.9q-.8-.7-.6-1.3t1.3-.8L14 11.8l5-10.2q.4-.9 1.1-.9.6 0 1.1.9l5 10.2 11.2 1.6q1 .2 1.2.8t-.5 1.3z" }))),
        !props.textFirst && textEl));
};
IconStarHalfEmpty.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStarHalfEmpty;
//# sourceMappingURL=IconStarHalfEmpty.js.map