import * as React from "react";
export const IconTruck = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--truck ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M13.9 31.2q0-1.2-.8-2t-2-.8-1.9.8-.8 2 .8 1.9 2 .8 1.9-.8.8-2zM5.6 20h8.3v-5.6h-3.4q-.3 0-.5.2l-4.2 4.3q-.2.2-.2.4v.7zm27.8 11.2q0-1.2-.8-2t-1.9-.8-2 .8-.8 2 .8 1.9 2 .8 1.9-.8.8-2zM39 7.5v22.3q0 .3-.1.5t-.3.4-.3.3-.5.1-.5.1-.6 0-.5 0q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9h-8.4q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9H3.1q-.2 0-.5-.1t-.5-.1-.3-.3-.3-.4-.1-.5q0-.6.4-1t1-.4v-9.3q0-.5.2-.9t.3-.6.5-.7l4.3-4.3q.4-.4 1.1-.7t1.3-.3h3.4V7.5q0-.6.5-1t.9-.4h22.3q.6 0 1 .4t.4 1z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconTruck.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconTruck.js.map