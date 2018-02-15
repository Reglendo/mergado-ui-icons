import * as React from "react";
export const IconAngellist = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--angellist ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M26.8 8.4l-2.6 7.4 2.6.4q3.7-10 3.7-11.5 0-1.3-.8-1.3-1.3 0-2.9 5zm-6.7 15.4l.7 1.9q.9-.9 1.6-1.5l-.7-.1-.9-.1-.7-.2zm-6.5-20q0 2.2 3.5 11.6.4-.2 1.1-.2.4 0 1.7.1l-2.7-7.8q-1.7-5-2.8-5-.4 0-.6.4t-.2.9zm-1.8 16.9q0 .8 1.2 2.7t2.6 3.4 2.2 1.5q.3 0 .6-.2t.2-.6q0-.6-.7-2.3-.3-.7-.7-1.6t-1-2-1.4-1.8-1.4-.7q-.4 0-1 .6t-.6 1zm-3.5 7.5q0 .9.5 2.3 1.4 3.3 4.1 5.1t6.3 1.8q5.1 0 8.6-3.8 3.3-3.8 3.3-9.5v-1.5q0-.5-.2-1.4t-.7-1.2q-1.3-1.1-4.7-1.7t-6.1-.6q-.8 0-1.1.2-.2.1-.2.8 0 .8.4 1.3t1.3.9 1.7.6 2 .2 1.9.1 1.5 0h.5q.6 0 .9.4.4.5.5 1.3-.7.6-2.2 1.2-1.3.5-2.1 1-1.4 1-2.4 2.5t-1 3.1q0 .7.4 2t.4 1.9v.3l-.1.3q-3.1-.2-3.3-4.8h-.9q.1.2.1.5 0 1.2-.9 2t-2.1.8q-1.9 0-3.8-1.7T9 29q0-.7.8-1.5 1.1 1.5 1.3 1.7 1.7 2.3 3 2.3.3 0 .6-.2t.3-.4q0-.8-1.9-3.2t-2.6-2.5q-1 0-1.6 1t-.6 2zm-2.6.2q0-2.3 1-3.6t3-2q-.6-1.7-.6-2.3 0-1.4 1.4-2.8t2.7-1.3q.6 0 1.6.3Q11.1 6.4 11.1 4q0-1.7.9-2.9T14.7 0q2.9 0 7.3 13 .1.4.1.5.2-.4.7-1.8t.9-2.6T25 6.2t1.4-2.7 1.6-2 1.7-.8q1.6 0 2.5 1.1t.9 2.8q0 2.4-3.6 12.2 1.4.4 2.3 1.1t1.3 1.7.6 2.1.1 2.5q0 3.3-1 6.2t-3 5-4.7 3.4-6.2 1.2q-2.5 0-5-.9-3.3-1.3-5.7-4.3t-2.5-6.4z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconAngellist.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconAngellist.js.map