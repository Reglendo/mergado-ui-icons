import * as React from "react";
export const IconProductHunt = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--product-hunt ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M25.7 17q0 1.3-.9 2.1t-2.1.9H17v-6h5.7q1.2 0 2.1.9t.9 2.1zm4 0q0-2.9-2.1-4.9T22.7 10H13v20h4v-6h5.7q2.9 0 4.9-2t2.1-5zM40 20q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0t7.8 1.6 6.4 4.2 4.2 6.4T40 20z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconProductHunt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconProductHunt.js.map