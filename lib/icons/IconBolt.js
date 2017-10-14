import * as React from "react";
class IconBolt extends React.Component {
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
                    React.createElement("path", { d: "m29.8 12.6q0.4 0.5 0.1 1l-12 25.8q-0.3 0.6-1 0.6-0.1 0-0.3 0-0.4-0.2-0.6-0.5t-0.1-0.6l4.4-18.1-9 2.3q-0.1 0-0.3 0-0.4 0-0.7-0.2-0.4-0.4-0.3-0.9l4.5-18.4q0.1-0.3 0.4-0.5t0.6-0.2h7.3q0.4 0 0.7 0.2t0.3 0.7q0 0.2-0.1 0.4l-3.8 10.3 8.8-2.2q0.2 0 0.3 0 0.4 0 0.8 0.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBolt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBolt;
//# sourceMappingURL=IconBolt.js.map