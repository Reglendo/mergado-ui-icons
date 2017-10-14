import * as React from "react";
class IconAutomobile extends React.Component {
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
                    React.createElement("path", { d: "m9.3 23.7q0-1.3-0.9-2.2t-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9 2.2-0.9 0.9-2.2z m0.7-6.2h19.7l-1.7-6.9q0-0.2-0.3-0.4t-0.4-0.1h-14.9q-0.2 0-0.4 0.1t-0.3 0.4z m26.6 6.2q0-1.3-0.9-2.2t-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9 2.2-0.9 0.9-2.2z m3.2-1.8v7.4q0 0.3-0.2 0.5t-0.5 0.1h-1.8v2.5q0 1.6-1.1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5h-19.9v2.5q0 1.6-1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5h-1.9q-0.3 0-0.4-0.1t-0.2-0.5v-7.4q0-1.8 1.3-3.1t3-1.3h0.6l2-8.1q0.5-1.8 2-3.1t3.5-1.2h14.9q1.9 0 3.5 1.2t2 3.1l2.1 8.1h0.5q1.8 0 3.1 1.3t1.3 3.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconAutomobile.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconAutomobile;
//# sourceMappingURL=IconAutomobile.js.map