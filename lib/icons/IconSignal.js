import * as React from "react";
class IconSignal extends React.Component {
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
                    React.createElement("path", { d: "m5.7 32.1v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m8.6-2.8v7.1q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-7.1q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m8.6-5.7v12.8q0 0.3-0.2 0.5t-0.6 0.2h-4.2q-0.4 0-0.6-0.2t-0.2-0.5v-12.8q0-0.3 0.2-0.5t0.6-0.2h4.2q0.4 0 0.6 0.2t0.2 0.5z m8.5-8.6v21.4q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-21.4q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m8.6-11.4v32.8q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-32.8q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconSignal.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconSignal;
//# sourceMappingURL=IconSignal.js.map