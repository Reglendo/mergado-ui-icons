import * as React from "react";
export const IconTicket = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--ticket ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M22.9 10.1l7 7-12.8 12.8-7-7zm-4.8 21.8l13.8-13.8q.5-.4.5-1t-.5-1l-8-8q-.4-.4-1-.4t-1 .4L8.1 21.9q-.5.4-.5 1t.5 1l8 8q.4.4 1 .4t1-.4zM38 17.7L17.7 38q-.8.8-2 .8t-2-.8l-2.8-2.8q1.2-1.3 1.2-3.1t-1.2-3-3-1.2-3.1 1.2L2 26.3q-.8-.8-.8-2t.8-2L22.3 2q.8-.8 2-.8t2 .8l2.8 2.8q-1.2 1.3-1.2 3.1t1.2 3 3 1.2 3.1-1.2l2.8 2.8q.8.8.8 2t-.8 2z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconTicket.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconTicket.js.map