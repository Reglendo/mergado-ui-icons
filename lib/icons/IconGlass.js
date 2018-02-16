import * as React from "react";
import shallowCompare from "shallow-compare";
class IconGlass extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--glass ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.9 4.2q0 .7-.9 1.7L22.9 20v17.1H30q.6 0 1 .5t.4 1-.4 1-1 .4H10q-.6 0-1-.4t-.4-1 .4-1 1-.5h7.1V20L3 5.9q-.9-1-.9-1.7 0-.6.4-.9t.8-.4 1 0h32.4q.5 0 .8.4t.4.9z" }))),
            !p.textFirst && textEl));
    }
}
IconGlass.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGlass;
//# sourceMappingURL=IconGlass.js.map