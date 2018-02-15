import * as React from "react";
export const IconHandORight = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--hand-o-right ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M5.7 30q0-.6-.4-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.4-1zm31.4-12.9q0-1.1-.8-2t-2-.8H21.4q0-.5.4-1.1t.7-1.2.7-1.5.4-1.9q0-1.5-1-2.2T20 5.7q-.5 0-2 3.1-.5 1-.8 1.5-.9 1.4-2.5 3.2-1.6 1.8-2.3 2.4-1.5 1.2-3.1 1.2h-.7v14.3h.7q1.6 0 3.7.7t4.3 1.5 4 .7q4.3 0 4.3-3.7 0-.6-.2-1.3.7-.3 1.1-1.2t.4-1.6-.4-1.5q1.2-1.2 1.2-2.7 0-.6-.2-1.2t-.6-1.1h7.4q1.1 0 2-.8t.8-2.1zm2.9 0q0 2.4-1.7 4.1t-4 1.7h-3.8q-.1 1.3-.8 2.6.1.5.1 1 0 2.2-1.4 3.9 0 3.1-1.9 4.9t-5 1.8q-3 0-7.2-1.5-3.7-1.3-5-1.3H2.9q-1.2 0-2.1-.9t-.8-2V17.1q0-1.1.8-2t2.1-.8h6.4q.2 0 .5-.1t.5-.3.5-.4.5-.5.5-.5.4-.5.3-.4Q14 10 14.8 8.8q.2-.5.7-1.4t.8-1.6.9-1.4 1.2-1.1 1.6-.4q2.8 0 4.6 1.5t1.8 4.2q0 1.5-.5 2.8h8.4q2.3 0 4 1.7t1.7 4z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconHandORight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconHandORight.js.map