import * as React from "react";
export const IconBolt = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--bolt ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M29.8 12.6q.4.5.1 1l-12 25.8q-.3.6-1 .6h-.3q-.4-.2-.6-.5t-.1-.6l4.4-18.1-9 2.3H11q-.4 0-.7-.2-.4-.4-.3-.9l4.5-18.4q.1-.3.4-.5t.6-.2h7.3q.4 0 .7.2t.3.7q0 .2-.1.4l-3.8 10.3 8.8-2.2h.3q.4 0 .8.3z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconBolt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconBolt.js.map