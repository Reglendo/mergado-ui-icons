import * as React from "react";
export const IconRedditSquare = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--reddit-square ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M24 25.2q.3.3 0 .6-1.2 1.2-3.9 1.2t-3.8-1.2q-.3-.3 0-.6.1-.1.3-.1t.3.1q.9.9 3.2.9t3.3-.9q.1-.1.3-.1t.3.1zm-5.9-3.5q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2q0-.7.5-1.2t1.2-.5 1.2.5.5 1.2zm7.5 0q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2q0-.7.5-1.2t1.2-.5 1.2.5.5 1.2zm4.8-2.3q0-.9-.6-1.6t-1.7-.7q-.9 0-1.6.7-2.5-1.7-6-1.8l1.3-5.4 3.8.9q0 .7.5 1.2t1.2.4q.7 0 1.2-.5t.5-1.2-.5-1.2-1.2-.5q-1.1 0-1.6 1l-4.2-1q-.4-.1-.4.3l-1.4 6q-3.4.1-5.9 1.9-.7-.8-1.6-.8-1 0-1.7.7t-.6 1.6q0 .7.3 1.2t.9.9q-.1.6-.1 1.1 0 2.7 2.7 4.6t6.5 2q3.8 0 6.4-2t2.7-4.6q0-.6-.1-1.1.5-.3.9-.9t.3-1.2zm6.9-10.1v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
        !props.textFirst && textEl));
};
IconRedditSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconRedditSquare;
//# sourceMappingURL=IconRedditSquare.js.map