import * as React from "react";
import shallowCompare from "shallow-compare";
class IconBeer extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--beer ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M14.8 20v-8.6H9.1v5.7q0 1.2.8 2.1t2 .8h2.9zm22.8 10v4.3H11.9V30l2.9-4.3h-2.9q-3.5 0-6-2.5t-2.5-6.1V10L1.9 8.6l.7-2.9h10.8l.7-2.8h21.4l.7 4.2-1.4.8v17.8z" }))),
            !p.textFirst && textEl));
    }
}
IconBeer.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBeer;
//# sourceMappingURL=IconBeer.js.map