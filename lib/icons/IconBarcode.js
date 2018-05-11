import * as React from "react";
class IconBarcode extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--barcode ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M1.4 34.3H0V2.9h1.4v31.4zm1.4 0h-.7V2.9h.7v31.4zm2.1 0h-.7V2.9h.7v31.4zm3.5 0h-.7V2.9h.7v31.4zm3.5 0h-1.4V2.9h1.4v31.4zm2.8 0H14V2.9h.7v31.4zm1.4 0h-.7V2.9h.7v31.4zm1.4 0h-.6V2.9h.6v31.4zm3.6 0h-1.5V2.9H21v31.4zm3.5 0h-1.5V2.9h1.5v31.4zm2.8 0H26V2.9h1.4v31.4zm2.8 0h-1.4V2.9h1.4v31.4zm2.1 0h-1.4V2.9h1.4v31.4zm4.2 0h-2.1V2.9h2.1v31.4zm1.4 0h-.7V2.9h.7v31.4zm2.1 0h-1.4V2.9H40v31.4z" }))),
            !p.textFirst && textEl));
    }
}
IconBarcode.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBarcode;
//# sourceMappingURL=IconBarcode.js.map