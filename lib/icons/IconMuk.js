import * as React from "react";
class IconMuk extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M0 0l20 20L0 40z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#6858e8" }),
                    React.createElement("path", { d: "M0 40l20-20 20 20z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#29235c" }),
                    React.createElement("path", { d: "M40 40L20 20 40 0z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#2d95d3" }),
                    React.createElement("path", { d: "M40 0L20 20 0 0z", style: { "isolation": "auto", "mixBlendMode": "normal" }, color: "#000", overflow: "visible", fill: "#fff" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMuk.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40.000003 39.999999",
    color: 'currentColor',
    textFirst: false,
};
export default IconMuk;
//# sourceMappingURL=IconMuk.js.map