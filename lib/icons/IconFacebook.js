import * as React from "react";
export const IconFacebook = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--facebook ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M29.4.3v5.9h-3.5q-1.9 0-2.6.8t-.7 2.4v4.2h6.6l-.9 6.6h-5.7v16.9h-6.8V20.2h-5.7v-6.6h5.7V8.7q0-4.1 2.3-6.4T24.3 0q3.3 0 5.1.3z" }))),
        !props.textFirst && textEl));
};
IconFacebook.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFacebook;
//# sourceMappingURL=IconFacebook.js.map