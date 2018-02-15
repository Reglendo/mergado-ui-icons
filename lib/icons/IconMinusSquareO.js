import * as React from "react";
export const IconMinusSquareO = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--minus-square-o ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M30.2 17.9v1.4q0 .3-.2.5t-.5.2H10.9q-.3 0-.5-.2t-.2-.5v-1.4q0-.4.2-.6t.5-.2h18.6q.3 0 .5.2t.2.6zm2.9 10V9.3q0-1.5-1.1-2.5t-2.5-1.1H10.9q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5zm2.8-18.6v18.6q0 2.6-1.9 4.5t-4.5 1.9H10.9q-2.6 0-4.5-1.9t-1.9-4.5V9.3q0-2.7 1.9-4.6t4.5-1.8h18.6q2.7 0 4.5 1.8t1.9 4.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconMinusSquareO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconMinusSquareO.js.map