import * as React from "react";
class IconCartArrowDown extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--cart-arrow-down ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M30.1 15.7q0-.6-.5-1t-1-.4-1 .4L24.4 18v-6.6q0-.6-.5-1t-1-.4-1 .4-.4 1V18l-3.3-3.3q-.4-.4-1-.4t-1 .4-.4 1 .4 1l5.7 5.7q.4.5 1 .5t1-.5l5.7-5.7q.5-.4.5-1zM15.8 34.3q0 1.2-.8 2t-2.1.8-2-.8-.8-2 .8-2 2-.9 2 .9.9 2zm20 0q0 1.2-.9 2t-2 .8-2-.8-.8-2 .8-2 2-.9 2 .9.9 2zM38.6 10v11.4q0 .6-.3 1t-.9.5l-23.3 2.7q0 .1.1.5t.1.6.1.4q0 .4-.6 1.5h20.6q.5 0 1 .4t.4 1-.4 1-1 .4H11.5q-.6 0-1-.4t-.4-1q0-.3.2-.9t.7-1.3.4-.9L7.5 8.6H2.9q-.6 0-1-.5t-.4-1 .4-1 1-.4h5.7q.4 0 .7.2t.4.3.3.6.2.5.1.7.1.6h26.8q.6 0 1 .4t.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCartArrowDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconCartArrowDown;
//# sourceMappingURL=IconCartArrowDown.js.map