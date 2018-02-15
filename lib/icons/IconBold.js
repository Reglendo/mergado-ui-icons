import * as React from "react";
export const IconBold = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--bold ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M16.9 34q1.6.7 3.1.7 8.4 0 8.4-7.5 0-2.6-.9-4-.6-1-1.4-1.7t-1.5-1-1.8-.6-1.9-.2-2.1-.1q-1.6 0-2.2.3v7q0 .2-.1 1.5t0 2.2.1 1.9.3 1.5zm-.3-16.7q.9.2 2.4.2 1.8 0 3.2-.3t2.5-1 1.6-2 .6-3.2q0-1.6-.7-2.7t-1.7-1.9-2.4-.9-2.8-.3q-1.1 0-2.9.2 0 1.2.1 3.4t.1 3.4v5.1zM4.5 37.1V35q.4 0 1.9-.3t2.4-.6q.2-.3.3-.6t.2-.8.1-.7.1-.8 0-.8v-1.5Q9.5 7 9 6.1q-.1-.2-.5-.4t-1-.2-1.1-.2-1.1-.1-.7 0l-.1-1.9q2.2 0 7.6-.2t8.4-.2h3q1.6 0 3 .3t2.9.9 2.4 1.6T33.5 8t.6 3.1q0 1.2-.4 2.1t-.8 1.6-1.5 1.3-1.6 1-1.9.9q3.5.8 5.7 3t2.3 5.5q0 2.3-.8 4t-2 3-3.1 1.9-3.7 1.1-3.9.3q-1 0-2.9-.1t-3-.1q-2.4 0-6.8.3t-5.2.2z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconBold.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconBold.js.map