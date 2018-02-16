import * as React from "react";
class IconShoppingCart extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--shopping-cart ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M15.8 34.3q0 1.1-.9 2t-2 .8-2-.8-.8-2 .8-2 2-.9 2 .9.9 2zm20 0q0 1.1-.9 2t-2 .8-2-.8-.8-2 .8-2 2-.9 2 .9.9 2zM38.6 10v11.4q0 .6-.3 1t-.9.5l-23.3 2.7q.3 1.3.3 1.5 0 .4-.6 1.5h20.6q.5 0 1 .4t.4 1-.4 1-1 .4H11.5q-.6 0-1-.4t-.4-1q0-.2.2-.7t.3-.8.5-.9.3-.7L7.5 8.6H2.9q-.6 0-1-.5t-.4-1 .4-1 1-.4h5.7q.4 0 .7.2t.4.3.3.6.2.5.1.7.1.6h26.8q.6 0 1 .4t.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconShoppingCart.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconShoppingCart;
//# sourceMappingURL=IconShoppingCart.js.map