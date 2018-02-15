import * as React from "react";
export const IconEllipsisV = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--ellipsis-v ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M24.1 27.9v4.2q0 .9-.7 1.6t-1.5.6h-4.3q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h4.3q.9 0 1.5.6t.7 1.6zm0-11.5v4.3q0 .9-.7 1.5t-1.5.7h-4.3q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.7 1.5zm0-11.4v4.3q0 .9-.7 1.5t-1.5.6h-4.3q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.7 1.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconEllipsisV.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconEllipsisV.js.map