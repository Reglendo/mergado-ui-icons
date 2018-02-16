import * as React from "react";
export const IconBarcode = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--barcode ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M1.4 34.3H0V2.9h1.4v31.4zm1.4 0h-.7V2.9h.7v31.4zm2.1 0h-.7V2.9h.7v31.4zm3.5 0h-.7V2.9h.7v31.4zm3.5 0h-1.4V2.9h1.4v31.4zm2.8 0H14V2.9h.7v31.4zm1.4 0h-.7V2.9h.7v31.4zm1.4 0h-.6V2.9h.6v31.4zm3.6 0h-1.5V2.9H21v31.4zm3.5 0h-1.5V2.9h1.5v31.4zm2.8 0H26V2.9h1.4v31.4zm2.8 0h-1.4V2.9h1.4v31.4zm2.1 0h-1.4V2.9h1.4v31.4zm4.2 0h-2.1V2.9h2.1v31.4zm1.4 0h-.7V2.9h.7v31.4zm2.1 0h-1.4V2.9H40v31.4z" }))),
        !props.textFirst && textEl));
};
IconBarcode.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBarcode;
//# sourceMappingURL=IconBarcode.js.map