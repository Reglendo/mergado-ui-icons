import * as React from "react";
export const IconStar = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--star ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M38.6 14.4q0 .5-.5 1.1L30 23.4l1.9 11.2v.4q0 .5-.2.8t-.7.3q-.4 0-.9-.2l-10-5.3-10 5.3q-.5.2-.9.2-.5 0-.7-.3t-.3-.8q0-.1.1-.4l1.9-11.2-8.1-7.9q-.6-.6-.6-1.1 0-.8 1.3-1L14 11.8l5-10.2q.4-.9 1.1-.9t1.1.9l5 10.2 11.2 1.6q1.2.2 1.2 1z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconStar.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconStar.js.map