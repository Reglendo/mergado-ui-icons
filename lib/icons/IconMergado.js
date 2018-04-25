import * as React from "react";
class IconMergado extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--mergado ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M0 0l20 20L0 40z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#7fba2c" }),
                    React.createElement("path", { d: "M0 40l20-20 20 20z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#007b20" }),
                    React.createElement("path", { d: "M40 40L20 20 40 0z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#00a9b8" }))),
            !p.textFirst && textEl));
    }
}
IconMergado.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMergado;
//# sourceMappingURL=IconMergado.js.map