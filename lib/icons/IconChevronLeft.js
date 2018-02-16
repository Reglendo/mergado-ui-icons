import * as React from "react";
import shallowCompare from "shallow-compare";
class IconChevronLeft extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--chevron-left ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.1 6.7L19.3 18.6l11.8 11.8q.5.4.5 1t-.5 1l-3.7 3.7q-.4.5-1 .5t-1-.5L8.9 19.6q-.5-.4-.5-1t.5-1L25.4 1q.5-.4 1-.4t1 .4l3.7 3.7q.5.4.5 1t-.5 1z" }))),
            !p.textFirst && textEl));
    }
}
IconChevronLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChevronLeft;
//# sourceMappingURL=IconChevronLeft.js.map