import * as React from "react";
export const IconCodepen = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--codepen ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M4.8 26.1l13.5 9v-8l-7.5-5zm-1.4-3.2L7.7 20l-4.3-2.9v5.8zm18.3 12.2l13.5-9-6-4-7.5 5v8zm-1.7-11l6.1-4.1-6.1-4.1-6.1 4.1zm-9.2-6.2l7.5-5v-8l-13.5 9zM32.3 20l4.3 2.9v-5.8zm-3.1-2.1l6-4-13.5-9v8zm10.8-4v12.2q0 .9-.8 1.4L21 39.7q-.5.3-1 .3t-1-.3L.8 27.5Q0 27 0 26.1V13.9q0-.9.8-1.4L19 .3q.5-.3 1-.3t1 .3l18.2 12.2q.8.5.8 1.4z" }))),
        !props.textFirst && textEl));
};
IconCodepen.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCodepen;
//# sourceMappingURL=IconCodepen.js.map