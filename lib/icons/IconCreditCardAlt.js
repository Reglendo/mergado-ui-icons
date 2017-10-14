import * as React from "react";
class IconCreditCardAlt extends React.Component {
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
                    React.createElement("path", { d: "M0 30.6V20h40.3v10.6q0 1.2-.8 2t-2 .8H2.8q-1.2 0-2-.8t-.8-2zm11.2-3.9V29h6.7v-2.3h-6.7zm-6.7 0V29H9v-2.3H4.5zm33-20.1q1.2 0 2 .8t.8 2v3.9H0V9.4q0-1.2.8-2t2-.8h34.7z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCreditCardAlt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCreditCardAlt;
//# sourceMappingURL=IconCreditCardAlt.js.map