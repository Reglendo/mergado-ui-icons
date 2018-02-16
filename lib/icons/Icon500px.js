import * as React from "react";
export const Icon500px = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--500px ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M35.3 34.5l-.2.2q-2.5 2.5-5.7 3.9-3.5 1.4-7.1 1.4-3.7 0-7.1-1.4-3.3-1.4-5.8-3.9t-3.9-5.8q-.9-2.3-1.2-4.2-.1-.6 1.1-.8 1.1-.2 1.2.4l.1.1q.4 2 1 3.6 1.1 2.7 3.4 5 2.2 2.2 5 3.4 3 1.3 6.2 1.3t6.1-1.3q2.9-1.2 5.1-3.4l.1-.1q.2-.2.6-.2.2.1.7.5.8.9.4 1.3zM24.7 20.8l-1.4 1.5 1.4 1.4q.4.5-.2 1.1-.4.4-.7.4-.2 0-.4-.3L22 23.6 20.5 25q-.1.2-.3.2-.4 0-.7-.4h-.1q-.4-.4-.4-.7 0-.1.2-.4l1.5-1.4-1.5-1.5q-.3-.4.3-1 .4-.4.7-.4.2 0 .3.1L22 21l1.4-1.5q.4-.3 1.1.3.6.6.2 1zm10.6 1.3q0 2.6-1.1 5.1-1 2.3-2.8 4.1-1.8 1.8-4.2 2.8t-5.1 1.1-5-1.1-4.2-2.8q-1.8-1.8-2.8-4.1-.3-.7-.3-.9h-.1q-.2-.6 1-1 1.1-.4 1.3.3.9 2.2 2.2 3.7v-7.6q.1-3.1 2.3-5.2 2.3-2.3 5.6-2.3t5.7 2.3 2.3 5.6q0 3.2-2.4 5.6T22.1 30q-1.2 0-2.5-.4-.6-.2-.2-1.3.3-1.2.9-1l.4.1q.3 0 .7.1t.7.1q2.3 0 3.9-1.6t1.6-3.9q0-2.3-1.6-3.8-1.6-1.6-3.9-1.6-2.4 0-4 1.8-1.4 1.6-1.4 3.5v9.2q2.4 1.5 5.4 1.5 2.1 0 4.1-.8t3.5-2.3 2.3-3.4.8-4.1q0-4.4-3.1-7.6-3.2-3.1-7.6-3.1-4.5 0-7.6 3.1-1.2 1.2-1.7 1.9v.1l-.3.3q-.1.1-.5.3t-.9-.1q-.4-.1-.8-.4T10 16V.8q0-.3.2-.5t.6-.3h19.6q.7 0 .7 1.2t-.7 1.3H12.3v10.7q.9-.9 2.3-1.8T17 10q2.4-1 5.1-1 2.7 0 5.1 1t4.2 2.8q1.8 1.8 2.8 4.2 1 2.5 1 5.1zm-.7-13q.2.2.2.4t-.2.4-.3.5q-.6.6-.9.6-.2 0-.4-.2-2.3-2-4.6-3-2.8-1.2-6.1-1.2-3 0-5.9 1.1-.6.2-1-.8-.2-.6-.2-.9.1-.4.4-.4 2.9-1.3 6.7-1.3 3.6 0 7 1.4 3.1 1.3 5.3 3.4z" }))),
        !props.textFirst && textEl));
};
Icon500px.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default Icon500px;
//# sourceMappingURL=Icon500px.js.map