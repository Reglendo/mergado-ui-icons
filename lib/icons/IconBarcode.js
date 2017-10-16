import * as React from "react";
class IconBarcode extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--barcode ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M1.4 34.3H0V2.9h1.4v31.4zm1.4 0h-.7V2.9h.7v31.4zm2.1 0h-.7V2.9h.7v31.4zm3.5 0h-.7V2.9h.7v31.4zm3.5 0h-1.4V2.9h1.4v31.4zm2.8 0H14V2.9h.7v31.4zm1.4 0h-.7V2.9h.7v31.4zm1.4 0h-.6V2.9h.6v31.4zm3.6 0h-1.5V2.9H21v31.4zm3.5 0h-1.5V2.9h1.5v31.4zm2.8 0H26V2.9h1.4v31.4zm2.8 0h-1.4V2.9h1.4v31.4zm2.1 0h-1.4V2.9h1.4v31.4zm4.2 0h-2.1V2.9h2.1v31.4zm1.4 0h-.7V2.9h.7v31.4zm2.1 0h-1.4V2.9H40v31.4z" }))),
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
    className: "",
};
export default IconBarcode;
//# sourceMappingURL=IconBarcode.js.map