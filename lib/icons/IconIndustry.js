import * as React from "react";
class IconIndustry extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--industry ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M10 0q.6 0 1 .4t.4 1v19.9l12-9.6q.4-.3.9-.3.6 0 1 .5t.4 1v8.4l12-9.6q.4-.3.9-.3t1 .5.4 1v25.7q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V1.4q0-.6.4-1t1-.4H10z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconIndustry.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconIndustry;
//# sourceMappingURL=IconIndustry.js.map