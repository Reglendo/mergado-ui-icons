import * as React from "react";
class IconCode extends React.Component {
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
                    React.createElement("path", { d: "m12.8 30.4l-1 1.1q-0.2 0.2-0.5 0.2t-0.5-0.2l-9.7-9.7q-0.2-0.2-0.2-0.5t0.2-0.4l9.7-9.7q0.2-0.2 0.5-0.2t0.5 0.2l1 1q0.2 0.2 0.2 0.5t-0.2 0.5l-8.1 8.1 8.1 8.2q0.2 0.2 0.2 0.5t-0.2 0.4z m12.3-22.1l-7.8 26.8q0 0.3-0.3 0.4t-0.5 0.1l-1.3-0.4q-0.2-0.1-0.4-0.3t0-0.5l7.7-26.8q0.1-0.3 0.4-0.4t0.4-0.1l1.3 0.4q0.3 0 0.4 0.3t0.1 0.5z m13.6 13.5l-9.7 9.7q-0.2 0.2-0.4 0.2t-0.5-0.2l-1-1.1q-0.3-0.2-0.3-0.4t0.3-0.5l8.1-8.2-8.1-8.1q-0.3-0.2-0.3-0.5t0.3-0.5l1-1q0.2-0.2 0.5-0.2t0.4 0.2l9.7 9.7q0.2 0.2 0.2 0.4t-0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCode.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCode;
//# sourceMappingURL=IconCode.js.map