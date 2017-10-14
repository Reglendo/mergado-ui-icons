import * as React from "react";
class IconLineChart extends React.Component {
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
                    React.createElement("path", { d: "m39.8 32.4v2.5h-39.8v-29.8h2.5v27.3h37.3z m-2.5-24.2v8.4q0 0.5-0.4 0.6t-0.7-0.1l-2.3-2.4-12.3 12.3q-0.2 0.2-0.5 0.2t-0.4-0.2l-4.5-4.5-8.1 8.1-3.8-3.8 11.4-11.3q0.2-0.2 0.4-0.2t0.5 0.2l4.5 4.5 9-9-2.3-2.4q-0.3-0.3-0.2-0.6t0.6-0.4h8.4q0.3 0 0.5 0.2t0.2 0.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconLineChart.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconLineChart;
//# sourceMappingURL=IconLineChart.js.map