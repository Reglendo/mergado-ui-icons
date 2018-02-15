import * as React from "react";
export const IconQuoteLeft = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--quote-left ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M18.6 21.4V30q0 1.8-1.2 3t-3 1.3H5.8q-1.8 0-3-1.3t-1.3-3V14.3q0-2.3.9-4.4t2.4-3.7 3.7-2.4 4.4-.9h1.5q.5 0 1 .4t.4 1v2.8q0 .6-.4 1t-1 .5h-1.5q-2.3 0-4 1.6t-1.7 4.1v.7q0 .9.6 1.5t1.6.6h5q1.7 0 3 1.3t1.2 3zm20 0V30q0 1.8-1.2 3t-3 1.3h-8.6q-1.8 0-3-1.3t-1.3-3V14.3q0-2.3.9-4.4t2.4-3.7 3.7-2.4 4.4-.9h1.5q.5 0 1 .4t.4 1v2.8q0 .6-.4 1t-1 .5h-1.5q-2.3 0-4 1.6t-1.7 4.1v.7q0 .9.6 1.5t1.6.6h5q1.7 0 3 1.3t1.2 3z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconQuoteLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconQuoteLeft.js.map