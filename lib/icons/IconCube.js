import * as React from "react";
export const IconCube = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--cube ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M21.5 36.4l14.3-7.8V14.4l-14.3 5.2v16.8zm-1.4-19.3l15.5-5.7-15.5-5.7-15.6 5.7zm18.5-5.7v17.2q0 .8-.4 1.4t-1.1 1.1l-15.7 8.5q-.6.4-1.3.4t-1.4-.4L3 31.1q-.7-.4-1.1-1.1t-.4-1.4V11.4q0-.9.5-1.6t1.4-1.1L19.1 3q.5-.1 1-.1t1 .1l15.7 5.8q.8.3 1.3 1t.5 1.6z" }))),
        !props.textFirst && textEl));
};
IconCube.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCube;
//# sourceMappingURL=IconCube.js.map