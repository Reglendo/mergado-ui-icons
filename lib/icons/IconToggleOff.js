import * as React from "react";
import shallowCompare from "shallow-compare";
class IconToggleOff extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--toggle-off ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M22.4 20q0-2-.8-3.9T19.4 13t-3.1-2.2-3.9-.7-3.8.7T5.4 13t-2.1 3.1-.8 3.9.8 3.9T5.4 27t3.2 2.2 3.8.7 3.9-.7 3.1-2.2 2.2-3.1.8-3.9zm14.9 0q0-2-.8-3.9T34.4 13t-3.2-2.2-3.9-.7h-7.5q2.3 1.7 3.7 4.3t1.3 5.6-1.3 5.6-3.7 4.3h7.5q2 0 3.9-.7t3.2-2.2 2.1-3.1.8-3.9zm2.5 0q0 2.5-1 4.8t-2.7 4-3.9 2.6-4.9 1H12.4q-2.5 0-4.8-1t-4-2.6-2.6-4T0 20t1-4.8 2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8z" }))),
            !p.textFirst && textEl));
    }
}
IconToggleOff.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconToggleOff;
//# sourceMappingURL=IconToggleOff.js.map