import * as React from "react";
class IconBarcode extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--barcode ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m1.4 34.3h-1.4v-31.4h1.4v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-0.7v-31.4h0.7v31.4z m3.5 0h-0.7v-31.4h0.7v31.4z m3.5 0h-1.4v-31.4h1.4v31.4z m2.8 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.6v-31.4h0.6v31.4z m3.6 0h-1.5v-31.4h1.4v31.4z m3.5 0h-1.5v-31.4h1.5v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z m4.2 0h-2.1v-31.4h2.1v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconBarcode.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconBarcode;
//# sourceMappingURL=IconBarcode.js.map