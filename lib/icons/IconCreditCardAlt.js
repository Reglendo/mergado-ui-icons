import * as React from "react";
class IconCreditCardAlt extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--credit-card-alt ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m0 30.6v-10.6h40.3v10.6q0 1.2-0.8 2t-2 0.8h-34.7q-1.2 0-2-0.8t-0.8-2z m11.2-3.9v2.3h6.7v-2.3h-6.7z m-6.7 0v2.3h4.5v-2.3h-4.5z m33-20.1q1.2 0 2 0.8t0.8 2v3.9h-40.3v-3.9q0-1.2 0.8-2t2-0.8h34.7z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCreditCardAlt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCreditCardAlt;
//# sourceMappingURL=IconCreditCardAlt.js.map