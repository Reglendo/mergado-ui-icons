import * as React from "react";
export const IconTag = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--tag ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M13 10q0-1.2-.8-2t-2.1-.9-2 .9-.8 2 .8 2 2 .9 2.1-.9.8-2zm23.8 12.9q0 1.1-.8 2L25 35.8q-.8.9-2 .9t-2-.9L5 19.9q-.8-.9-1.4-2.3T3 15V5.7q0-1.1.8-2t2.1-.8h9.2q1.2 0 2.7.5T20 4.9l16 15.9q.8.9.8 2.1z" }))),
        !props.textFirst && textEl));
};
IconTag.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTag;
//# sourceMappingURL=IconTag.js.map