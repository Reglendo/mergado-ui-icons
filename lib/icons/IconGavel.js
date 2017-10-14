import * as React from "react";
class IconGavel extends React.Component {
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
                    React.createElement("path", { d: "m39.5 34.3q0 1.2-0.8 2l-2.4 2.4q-0.9 0.8-2 0.8-1.2 0-2-0.8l-8.1-8.1q-0.9-0.8-0.9-2 0-1.2 1-2.2l-5.7-5.7-2.8 2.8q-0.4 0.3-0.8 0.3t-0.8-0.3q0.1 0.1 0.3 0.3t0.3 0.3 0.2 0.2 0.2 0.3 0.2 0.3 0.1 0.4 0 0.4q0 0.9-0.6 1.5-0.1 0.1-0.4 0.4t-0.4 0.5-0.4 0.4-0.5 0.3-0.5 0.2-0.6 0.1q-0.8 0-1.5-0.6l-9.1-9.1q-0.6-0.6-0.6-1.5 0-0.3 0.1-0.6t0.2-0.5 0.3-0.5 0.4-0.4 0.5-0.4 0.4-0.4q0.6-0.6 1.5-0.6 0.2 0 0.4 0t0.4 0.1 0.3 0.2 0.3 0.2 0.2 0.2 0.3 0.3 0.3 0.3q-0.3-0.4-0.3-0.8t0.3-0.8l7.7-7.7q0.4-0.3 0.8-0.3t0.8 0.3q-0.1-0.1-0.3-0.3t-0.3-0.3-0.2-0.2-0.2-0.3-0.2-0.3-0.1-0.4 0-0.4q0-0.9 0.6-1.5 0.1-0.1 0.4-0.4t0.4-0.5 0.4-0.4 0.5-0.3 0.5-0.2 0.6-0.1q0.8 0 1.5 0.6l9.1 9.1q0.6 0.6 0.6 1.5 0 0.3-0.1 0.6t-0.2 0.5-0.3 0.5-0.4 0.4-0.5 0.4-0.4 0.4q-0.6 0.6-1.5 0.6-0.2 0-0.4 0t-0.4-0.1-0.3-0.2-0.3-0.2-0.2-0.2-0.3-0.3-0.3-0.3q0.3 0.4 0.3 0.8t-0.3 0.8l-2.8 2.8 5.7 5.7q1-1 2.2-1 1.1 0 2 0.9l8.1 8.1q0.8 0.8 0.8 2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconGavel.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconGavel;
//# sourceMappingURL=IconGavel.js.map