import * as React from "react";
class IconExchange extends React.Component {
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
                    React.createElement("path", { d: "m40 26.4v4.3q0 0.3-0.2 0.5t-0.5 0.2h-30.7v4.3q0 0.3-0.2 0.5t-0.5 0.2q-0.3 0-0.6-0.2l-7.1-7.1q-0.2-0.2-0.2-0.5 0-0.3 0.2-0.5l7.1-7.2q0.2-0.2 0.6-0.2 0.2 0 0.5 0.2t0.2 0.5v4.3h30.7q0.3 0 0.5 0.2t0.2 0.5z m0-12.1q0 0.3-0.2 0.5l-7.1 7.1q-0.2 0.2-0.6 0.2-0.2 0-0.5-0.2t-0.2-0.5v-4.3h-30.7q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.2 0.2-0.5t0.5-0.2h30.7v-4.3q0-0.3 0.2-0.5t0.5-0.2q0.3 0 0.6 0.3l7.1 7.1q0.2 0.2 0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconExchange.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconExchange;
//# sourceMappingURL=IconExchange.js.map