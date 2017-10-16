import * as React from "react";
class IconFlipHorizontal extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--flip-horizontal ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { style: { "lineHeight": "normal", "fontVariantLigatures": "normal", "fontVariantPosition": "normal", "fontVariantCaps": "normal", "fontVariantNumeric": "normal", "fontVariantAlternates": "normal", "fontFeatureSettings": "normal", "textIndent": 0, "textAlign": "start", "textDecorationLine": "none", "textDecorationStyle": "solid", "textDecorationColor": "#000", "textTransform": "none", "textOrientation": "mixed", "shapePadding": 0, "isolation": "auto", "mixBlendMode": "normal" }, d: "M38.064 34.07l-.636-1.047L20.932 5.93v28.14zm-2.449-1.377H22.31V10.836zM19.068 5.93l-1.562 2.564L1.936 34.07h17.132z", overflow: "visible", color: "#000", "font-weight": "400", "font-family": "sans-serif", "white-space": "normal", "fill-rule": "evenodd" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFlipHorizontal.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconFlipHorizontal;
//# sourceMappingURL=IconFlipHorizontal.js.map