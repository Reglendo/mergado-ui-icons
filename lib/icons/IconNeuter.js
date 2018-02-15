import * as React from "react";
export const IconNeuter = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--neuter ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M32.7 12.9q0 4.9-3.3 8.5t-8.1 4.2v13.7q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5V25.6q-4.8-.5-8.1-4.2T7 12.9q0-2.7 1-5t2.8-4.1T14.9 1t5-1 4.9 1T29 3.8t2.7 4.1 1 5zm-12.8 10q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconNeuter.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconNeuter.js.map