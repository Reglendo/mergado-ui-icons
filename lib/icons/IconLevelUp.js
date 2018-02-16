import * as React from "react";
export const IconLevelUp = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--level-up ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.2 13.5q-.4.8-1.3.8h-4.3v19.3q0 .3-.2.5t-.5.2H9.2q-.5 0-.6-.4-.2-.5.1-.8l3.5-4.3q.2-.2.6-.2h7.1V14.3h-4.3q-.9 0-1.3-.8-.3-.9.2-1.6l7.2-8.5q.4-.5 1.1-.5t1.1.5l7.1 8.5q.6.8.2 1.6z" }))),
        !props.textFirst && textEl));
};
IconLevelUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLevelUp;
//# sourceMappingURL=IconLevelUp.js.map