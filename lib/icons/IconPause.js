import * as React from "react";
export const IconPause = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--pause ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.3 4.3v31.4q0 .6-.4 1t-1 .4H24.4q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4h11.5q.5 0 1 .4t.4 1zm-20 0v31.4q0 .6-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4h11.5q.5 0 1 .4t.4 1z" }))),
        !props.textFirst && textEl));
};
IconPause.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPause;
//# sourceMappingURL=IconPause.js.map