import * as React from "react";
class IconPieChart extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--pie-chart ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M17.6 19.9l12.2 12.2q-2.3 2.4-5.5 3.7t-6.7 1.3q-4.6 0-8.6-2.3t-6.2-6.2T.5 20t2.3-8.6T9 5.2t8.6-2.3v17zm4.2.1h17.3q0 3.5-1.4 6.7T34 32.2zm15.8-2.9H20.5V0q4.7 0 8.6 2.3t6.2 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconPieChart.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPieChart;
//# sourceMappingURL=IconPieChart.js.map