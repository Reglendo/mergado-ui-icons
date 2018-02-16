import * as React from "react";
export const IconHandOUp = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--hand-o-up ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.6 35.7q0-.6-.5-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.5-1zm2.8-17q0-4.3-3.7-4.3-.6 0-1.3.2-.3-.7-1.1-1.1t-1.7-.4-1.5.4q-1.1-1.2-2.7-1.2-.5 0-1.2.2t-1.1.6V5.7q0-1.1-.8-2t-2-.8q-1.2 0-2 .8t-.9 2v12.9q-.4 0-1.1-.4t-1.2-.7-1.5-.7-1.9-.4q-1.5 0-2.2 1T5.9 20q0 .5 3.1 2 .9.5 1.4.8 1.4.9 3.2 2.5 1.9 1.6 2.4 2.3 1.3 1.5 1.3 3.1v.7h14.3v-.7q0-1.6.7-3.7t1.4-4.3.7-4zm2.9-.1q0 2.9-1.6 7.1-1.3 3.7-1.3 5v6.4q0 1.2-.8 2.1t-2 .8H17.3q-1.2 0-2-.8t-.9-2.1v-6.4q0-.2-.1-.5t-.3-.5-.4-.5-.5-.5-.5-.5-.4-.4-.4-.3q-1.7-1.5-2.9-2.3-.5-.2-1.4-.7t-1.6-.8-1.4-.9-1.1-1.2T3 20q0-2.8 1.5-4.6t4.2-1.8q1.5 0 2.9.5V5.7q0-2.3 1.7-4t4-1.7q2.3 0 4 1.7t1.7 4v3.8q1.4.1 2.7.8.4-.1.9-.1 2.3 0 4 1.4 3.1 0 4.9 1.9t1.8 5z" }))),
        !props.textFirst && textEl));
};
IconHandOUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHandOUp;
//# sourceMappingURL=IconHandOUp.js.map