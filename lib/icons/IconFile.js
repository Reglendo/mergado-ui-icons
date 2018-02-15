import * as React from "react";
export const IconFile = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--file ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M25.9 11.4V.9l.8.6 9.1 9.1q.3.3.6.8H25.9zm-2.9.7q0 .9.6 1.6t1.5.6h12.2v23.6q0 .9-.6 1.5t-1.6.6h-30q-.8 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0H23v12.1z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconFile.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconFile.js.map