import * as React from "react";
export const IconAutomobile = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--automobile ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M9.3 23.7q0-1.3-.9-2.2t-2.2-.9-2.2.9-.9 2.2.9 2.2 2.2.9 2.2-.9.9-2.2zm.7-6.2h19.7L28 10.6q0-.2-.3-.4t-.4-.1H12.4q-.2 0-.4.1t-.3.4zm26.6 6.2q0-1.3-.9-2.2t-2.2-.9-2.2.9-.9 2.2.9 2.2 2.2.9 2.2-.9.9-2.2zm3.2-1.8v7.4q0 .3-.2.5t-.5.1h-1.8v2.5q0 1.6-1.1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5H9.9v2.5q0 1.6-1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5H.6q-.3 0-.4-.1t-.2-.5v-7.4q0-1.8 1.3-3.1t3-1.3h.6l2-8.1q.5-1.8 2-3.1t3.5-1.2h14.9q1.9 0 3.5 1.2t2 3.1l2.1 8.1h.5q1.8 0 3.1 1.3t1.3 3.1z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconAutomobile.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconAutomobile.js.map