import * as React from "react";
export const IconBars = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--bars ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.3 30v2.9q0 .5-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h31.5q.5 0 1 .4t.4 1zm0-11.4v2.8q0 .6-.4 1t-1 .5H4.4q-.6 0-1-.5t-.4-1v-2.8q0-.6.4-1t1-.5h31.5q.5 0 1 .5t.4 1zm0-11.5V10q0 .6-.4 1t-1 .4H4.4q-.6 0-1-.4T3 10V7.1q0-.5.4-1t1-.4h31.5q.5 0 1 .4t.4 1z" }))),
        !props.textFirst && textEl));
};
IconBars.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBars;
//# sourceMappingURL=IconBars.js.map