import * as React from "react";
class IconFireExtinguisher extends React.Component {
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
                    React.createElement("path", { d: "m15.9 4.3q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m20-0.7v7.1q0 0.4-0.2 0.6-0.2 0.1-0.5 0.1-0.1 0-0.1 0l-10-2.1q-0.3-0.1-0.4-0.3t-0.2-0.4h-5.7v2.2q2.5 0.6 4.1 2.5t1.6 4.6v17.8q0 0.6-0.4 1t-1 0.4h-11.5q-0.5 0-1-0.4t-0.4-1v-17.8q0-2.4 1.4-4.3t3.6-2.6v-2.4h-0.7q-1.3 0-2.6 0.5t-2 1.2-1.5 1.5-0.9 1.2-0.3 0.5q-0.4 0.8-1.3 0.8-0.3 0-0.6-0.2-0.5-0.2-0.7-0.8t0.1-1.1q0.1-0.2 0.3-0.6t0.8-1.2 1.4-1.5 1.9-1.5 2.4-1.2q-0.6-0.9-0.6-1.9 0-1.5 1.1-2.5t2.5-1.1 2.5 1.1 1.1 2.5q0 0.7-0.3 1.4h6.7q0-0.2 0.2-0.4t0.4-0.3l10-2.1q0 0 0.1 0 0.3 0 0.5 0.1 0.2 0.2 0.2 0.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFireExtinguisher.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFireExtinguisher;
//# sourceMappingURL=IconFireExtinguisher.js.map