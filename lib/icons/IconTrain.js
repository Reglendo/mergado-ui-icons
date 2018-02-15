import * as React from "react";
export const IconTrain = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--train ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M27.3 0q4.1 0 7.1 2.1t2.9 5v20q0 2.9-2.8 5t-6.8 2.2l4.7 4.5q.4.3.2.8t-.7.4H8.4q-.5 0-.7-.4t.2-.8l4.7-4.5q-4-.2-6.8-2.2t-2.8-5v-20q0-2.9 2.9-5T13 0h14.3zm-7.2 30q1.8 0 3.1-1.2t1.2-3.1-1.2-3-3.1-1.3-3 1.3-1.2 3 1.2 3.1 3 1.2zM33 17.1V5.7H7.3v11.4H33z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconTrain.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconTrain.js.map