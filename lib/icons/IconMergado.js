import * as React from "react";
export const IconMergado = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--mergado ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M0 0l20 20L0 40z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#7fba2c" }),
                React.createElement("path", { d: "M0 40l20-20 20 20z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#007b20" }),
                React.createElement("path", { d: "M40 40L20 20 40 0z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#00a9b8" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconMergado.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40.000003 39.999999",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconMergado.js.map