import * as React from "react";
export const IconArrowCircleORight = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--arrow-circle-o-right ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M28.7 20q0 .3-.2.5l-7.1 7.2q-.2.2-.5.2t-.5-.3-.3-.5v-4.2h-7.8q-.3 0-.5-.3t-.2-.5v-4.2q0-.3.2-.5t.5-.3h7.8v-4.2q0-.4.2-.6t.6-.2q.2 0 .5.3l7.1 7.1q.2.2.2.5zm3.6 0q0-3.3-1.6-6.1t-4.5-4.4-6.1-1.6T14 9.5t-4.4 4.4T8 20t1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1zm5 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconArrowCircleORight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconArrowCircleORight.js.map