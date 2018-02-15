import * as React from "react";
export const IconEllipsisH = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--ellipsis-h ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M13.1 16.4v4.3q0 .9-.7 1.5t-1.5.7H6.6q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.7 1.5zm11.4 0v4.3q0 .9-.6 1.5t-1.5.7h-4.3q-.9 0-1.5-.7t-.7-1.5v-4.3q0-.9.7-1.5t1.5-.6h4.3q.9 0 1.5.6t.6 1.5zm11.4 0v4.3q0 .9-.6 1.5t-1.5.7h-4.3q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.6 1.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconEllipsisH.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconEllipsisH.js.map