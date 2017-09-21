import * as React from "react";
class IconShoppingBag extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--shopping-bag ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.2 31.4l0.8 7q0.1 0.6-0.4 1.1-0.4 0.5-1 0.5h-37.2q-0.6 0-1-0.5-0.5-0.5-0.4-1.1l0.8-7h38.4z m-2.1-18.7l2 17.3h-38.2l2-17.3q0-0.5 0.4-0.9t1-0.4h5.7v2.9q0 1.2 0.8 2t2.1 0.8 2-0.8 0.8-2v-2.9h8.6v2.9q0 1.2 0.8 2t2 0.8 2.1-0.8 0.8-2v-2.9h5.7q0.6 0 1 0.4t0.4 0.9z m-8.5-4.1v5.7q0 0.6-0.5 1t-1 0.4-1-0.4-0.4-1v-5.7q0-2.4-1.7-4.1t-4-1.6-4 1.6-1.7 4.1v5.7q0 0.6-0.4 1t-1 0.4-1-0.4-0.5-1v-5.7q0-3.6 2.5-6.1t6.1-2.5 6.1 2.5 2.5 6.1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconShoppingBag.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconShoppingBag;
//# sourceMappingURL=IconShoppingBag.js.map