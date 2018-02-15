import * as React from "react";
export const IconSliders = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--sliders ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M10.9 31.4v2.9H3v-2.9h7.9zm7.8-2.8q.6 0 1 .4t.4 1v5.7q0 .6-.4 1t-1 .4H13q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h5.7zm3.6-8.6v2.9H3V20h19.3zM8 8.6v2.8H3V8.6h5zm29.3 22.8v2.9H20.9v-2.9h16.4zM15.9 5.7q.5 0 1 .4t.4 1v5.8q0 .5-.4 1t-1 .4h-5.8q-.5 0-1-.4t-.4-1V7.1q0-.5.4-1t1-.4h5.8zm14.2 11.4q.6 0 1 .5t.5 1v5.7q0 .6-.5 1t-1 .4h-5.7q-.5 0-1-.4t-.4-1v-5.7q0-.6.4-1t1-.5h5.7zm7.2 2.9v2.9h-5V20h5zm0-11.4v2.8H18V8.6h19.3z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconSliders.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconSliders.js.map