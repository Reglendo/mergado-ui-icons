import * as React from "react";
class IconAngleDoubleDown extends React.Component {
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
                    React.createElement("path", { d: "m31 19.3q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.2-0.5 0.2t-0.6-0.2l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l1.2-1.1q0.2-0.3 0.5-0.3t0.5 0.3l8.8 8.7 8.7-8.7q0.3-0.3 0.5-0.3t0.6 0.3l1.1 1.1q0.2 0.2 0.2 0.5z m0-8.6q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.5 0.3t-0.6-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l1.2-1.1q0.2-0.2 0.5-0.2t0.5 0.2l8.8 8.8 8.7-8.8q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconAngleDoubleDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconAngleDoubleDown;
//# sourceMappingURL=IconAngleDoubleDown.js.map