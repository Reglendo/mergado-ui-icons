import * as React from "react";
import shallowCompare from "shallow-compare";
class IconBarChart extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--bar-chart ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M12.4 20v9.9H7.5V20h4.9zm7.5-9.9v19.8h-5V10.1h5zm19.9 22.3v2.5H0V5.1h2.5v27.3h37.3zM27.3 15v14.9h-4.9V15h4.9zm7.5-7.4v22.3h-5V7.6h5z" }))),
            !p.textFirst && textEl));
    }
}
IconBarChart.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBarChart;
//# sourceMappingURL=IconBarChart.js.map