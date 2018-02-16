import * as React from "react";
export const IconGamepad = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--gamepad ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M17.3 24v-2.7q0-.3-.2-.4t-.5-.2h-4v-4q0-.3-.2-.5T12 16H9.3q-.3 0-.5.2t-.2.5v4H4.7q-.3 0-.5.1t-.2.5V24q0 .3.2.5t.5.2h3.9v3.9q0 .3.2.5t.5.2H12q.3 0 .4-.2t.2-.5v-3.9h4q.3 0 .5-.2t.2-.5zm11.9 1.3q0-1.1-.7-1.9t-1.9-.7-1.9.7-.8 1.9.8 1.9 1.9.8 1.9-.8.7-1.9zm5.4-5.3q0-1.1-.8-1.9t-1.9-.8-1.9.8-.8 1.9.8 1.9 1.9.8 1.9-.8.8-1.9zm5.3 2.7q0 4.4-3.1 7.5t-7.6 3.1q-4 0-7-2.7h-4.6q-3 2.7-7 2.7-4.4 0-7.5-3.1T0 22.7t3.1-7.6 7.5-3.1h18.6q4.4 0 7.6 3.1t3.1 7.6z" }))),
        !props.textFirst && textEl));
};
IconGamepad.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGamepad;
//# sourceMappingURL=IconGamepad.js.map