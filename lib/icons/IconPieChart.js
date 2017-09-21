import * as React from "react";
class IconPieChart extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--pie-chart ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m17.6 19.9l12.2 12.2q-2.3 2.4-5.5 3.7t-6.7 1.3q-4.6 0-8.6-2.3t-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3v17z m4.2 0.1h17.3q0 3.5-1.4 6.7t-3.7 5.5z m15.8-2.9h-17.1v-17.1q4.7 0 8.6 2.3t6.2 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconPieChart.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconPieChart;
//# sourceMappingURL=IconPieChart.js.map