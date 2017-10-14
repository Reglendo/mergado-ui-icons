import * as React from "react";
class IconBarcode extends React.Component {
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
                    React.createElement("path", { d: "m1.4 34.3h-1.4v-31.4h1.4v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-0.7v-31.4h0.7v31.4z m3.5 0h-0.7v-31.4h0.7v31.4z m3.5 0h-1.4v-31.4h1.4v31.4z m2.8 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.6v-31.4h0.6v31.4z m3.6 0h-1.5v-31.4h1.4v31.4z m3.5 0h-1.5v-31.4h1.5v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z m4.2 0h-2.1v-31.4h2.1v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBarcode.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBarcode;
//# sourceMappingURL=IconBarcode.js.map