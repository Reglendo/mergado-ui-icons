import * as React from "react";
export const IconCcPaypal = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--cc-paypal ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M13 20.2q0 .6-.4 1.1t-1.1.4q-.5 0-.8-.3t-.3-.8q0-.6.4-1.1t1.1-.4q.5 0 .8.3t.3.8zm13.8-2.6q0 .7-.4 1t-1.2.2h-.5L25 17q0-.2.2-.2h.9q.2 0 .5.2t.2.6zm6.1 2.6q0 .6-.4 1t-1.1.5q-.5 0-.8-.3t-.3-.8q0-.6.4-1.1t1.1-.4q.5 0 .8.3t.3.8zM9 17.2q0-1.1-.7-1.5t-1.8-.5H3.7q-.3 0-.3.4l-1.2 7.1q0 .1.1.2t.2.1h1.3q.3 0 .4-.4l.3-1.9q0-.1.1-.2t.3-.1.3 0 .3 0 .3 0q1.5 0 2.3-.9t.9-2.3zm5.4 5.4l.7-4.5v-.2q0-.1-.2-.1h-1.3q-.3 0-.3.6-.5-.7-1.7-.7-1.3 0-2.2.9t-.8 2.2q0 1.1.6 1.7t1.6.6q.5 0 1-.2t.8-.6v.4q0 .3.2.3H14q.3 0 .4-.4zm7.8-4.6l-.1-.1-.1-.1h-1.4q-.2 0-.3.2l-1.8 2.7-.8-2.6q-.1-.3-.4-.3H16q-.1 0-.2.1t0 .1q0 .1.3 1.1t.7 2.1.5 1.3q-1.5 1.9-1.5 2.1 0 .2.3.2h1.3q.2 0 .3-.2l4.5-6.4V18zm6.7-.8q0-1.1-.7-1.5t-1.8-.5h-2.7q-.4 0-.4.4l-1.2 7.1q0 .1.1.2t.2.1h1.4q.2 0 .3-.3l.3-2q0-.1.1-.2t.3-.1.3 0 .3 0 .2 0q1.6 0 2.4-.9t.9-2.3zm5.4 5.4l.7-4.5q0-.1-.1-.2t-.1-.1h-1.4q-.2 0-.3.6-.4-.7-1.6-.7-1.3 0-2.2.9t-.9 2.2q0 1.1.7 1.7t1.6.6q.5 0 1-.2t.8-.6v.4q0 .3.2.3h1.2q.3 0 .4-.4zm3.8-7.1q0-.3-.2-.3h-1.3q-.2 0-.3.2l-1.1 7.3q0 .1.1.2t.1.1h1.2q.3 0 .4-.4zM6.9 17.8q-.1.6-.5.8t-1 .2h-.6l.3-1.8q0-.2.2-.2h.3q.7 0 1.1.2t.2.8zm33.4-9v22.4q0 .9-.6 1.6t-1.6.6H2.2q-.9 0-1.5-.6T0 31.2V8.8q0-.9.7-1.6t1.5-.6h35.9q.9 0 1.6.6t.6 1.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconCcPaypal.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconCcPaypal.js.map