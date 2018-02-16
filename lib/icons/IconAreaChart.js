import * as React from "react";
class IconAreaChart extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--area-chart ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M39.8 32.4v2.5H0V5.1h2.5v27.3h37.3zm-7.5-19.9l5 17.4H5V18.8l8.7-11.2 11.1 11.2z" }))),
            !p.textFirst && textEl));
    }
}
IconAreaChart.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAreaChart;
//# sourceMappingURL=IconAreaChart.js.map