import * as React from "react";
class IconForward extends React.Component {
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
                    React.createElement("path", { d: "m4 36.9q-0.4 0.4-0.7 0.2t-0.3-0.7v-32.8q0-0.6 0.3-0.7t0.7 0.2l15.9 15.9q0.1 0.2 0.2 0.4v-15.8q0-0.6 0.3-0.7t0.7 0.2l15.9 15.9q0.4 0.4 0.4 1t-0.4 1l-15.9 15.9q-0.4 0.4-0.7 0.2t-0.3-0.7v-15.8q-0.1 0.2-0.2 0.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconForward.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconForward;
//# sourceMappingURL=IconForward.js.map