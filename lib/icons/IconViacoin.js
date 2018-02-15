import * as React from "react";
export const IconViacoin = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--viacoin ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.3 0L33 10h4.3v4.3h-6.1l-1.3 2.8h7.4v4.3h-9.2l-8 18.6-7.9-18.6H3v-4.3h7.3l-1.2-2.8H3V10h4.3L3 0h5.7l7.2 17.1h8.5L31.6 0h5.7zM20.1 27.1l2.5-5.7h-4.9z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconViacoin.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconViacoin.js.map