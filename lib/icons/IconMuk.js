import * as React from "react";
export const IconMuk = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--muk ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M0 0l20 20L0 40z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#6858e8" }),
                React.createElement("path", { d: "M0 40l20-20 20 20z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#29235c" }),
                React.createElement("path", { d: "M40 40L20 20 40 0z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#2d95d3" }))),
        !props.textFirst && textEl));
};
IconMuk.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMuk;
//# sourceMappingURL=IconMuk.js.map