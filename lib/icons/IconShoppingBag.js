import * as React from "react";
class IconShoppingBag extends React.Component {
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
                    React.createElement("path", { d: "M39.2 31.4l.8 7q.1.6-.4 1.1-.4.5-1 .5H1.4q-.6 0-1-.5-.5-.5-.4-1.1l.8-7h38.4zm-2.1-18.7l2 17.3H.9l2-17.3q0-.5.4-.9t1-.4H10v2.9q0 1.2.8 2t2.1.8 2-.8.8-2v-2.9h8.6v2.9q0 1.2.8 2t2 .8 2.1-.8.8-2v-2.9h5.7q.6 0 1 .4t.4.9zm-8.5-4.1v5.7q0 .6-.5 1t-1 .4-1-.4-.4-1V8.6q0-2.4-1.7-4.1t-4-1.6-4 1.6-1.7 4.1v5.7q0 .6-.4 1t-1 .4-1-.4-.5-1V8.6q0-3.6 2.5-6.1T20 0t6.1 2.5 2.5 6.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconShoppingBag.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconShoppingBag;
//# sourceMappingURL=IconShoppingBag.js.map