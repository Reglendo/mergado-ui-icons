import * as React from "react";
export const IconStumbleupon = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--stumbleupon ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M22.1 16.2v-2.5q0-.8-.7-1.5t-1.5-.6-1.5.6-.6 1.5v12.7q0 3.7-2.6 6.2t-6.3 2.6q-3.7 0-6.3-2.6T0 26.3v-5.5h6.8v5.4q0 .9.6 1.5t1.5.6 1.5-.6.6-1.5V13.4q0-3.6 2.7-6.1t6.2-2.5q3.7 0 6.3 2.5t2.6 6.1v2.8l-4 1.2zm11 4.6h6.8v5.5q0 3.7-2.6 6.3T31 35.2q-3.7 0-6.3-2.6t-2.6-6.2v-5.6l2.7 1.3 4-1.2v5.6q0 .9.6 1.5t1.5.6 1.5-.6.7-1.5v-5.7z" }))),
        !props.textFirst && textEl));
};
IconStumbleupon.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStumbleupon;
//# sourceMappingURL=IconStumbleupon.js.map