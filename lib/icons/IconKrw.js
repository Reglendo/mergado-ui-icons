import * as React from "react";
export const IconKrw = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--krw ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M11.5 26.7l1.8-6.7H9.7l1.7 6.7v.1q0 .1.1 0t0-.1zm2.6-9.6l.7-2.8H8.3l.7 2.8h5.1zm4.2 0h3.2l-.8-2.8h-1.6zm10.1 9.6l1.7-6.7h-3.6l1.8 6.7v.1q0 .1 0 0h.1q.1 0 0-.1zm2.4-9.6l.8-2.8H25l.7 2.8h5.2zm9.2.8v1.4q0 .3-.2.5t-.5.2h-4.8l-3.6 13.7q-.2.6-.7.6h-3.6q-.5 0-.7-.6L22.2 20h-4.6l-3.8 13.8q-.1.5-.7.5H9.6q-.2 0-.4-.2t-.3-.3L5.4 20H.7q-.3 0-.5-.2t-.2-.5v-1.4q0-.4.2-.6t.5-.2h3.9l-.7-2.8H.7q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h2.4L1.2 3.8q-.2-.4.1-.7.2-.2.6-.2h3q.6 0 .7.5l2 8h8l2.2-8q.1-.5.7-.5h2.8q.5 0 .7.5l2.2 8h8.1l2.1-8q.1-.5.7-.5h3q.4 0 .6.2.2.3.1.7l-2 7.6h2.5q.3 0 .5.2t.2.5v1.5q0 .3-.2.5t-.5.2H36l-.7 2.8h4q.3 0 .5.2t.2.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconKrw.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconKrw.js.map