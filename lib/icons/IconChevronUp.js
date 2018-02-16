import * as React from "react";
import shallowCompare from "shallow-compare";
class IconChevronUp extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--chevron-up ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.6 29.7l-3.7 3.7q-.5.4-1 .4t-1-.4L20 21.5 8.2 33.4q-.5.4-1.1.4t-1-.4l-3.7-3.7q-.4-.4-.4-1t.4-1L19 11.1q.4-.4 1-.4t1 .4l16.6 16.6q.4.4.4 1t-.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconChevronUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChevronUp;
//# sourceMappingURL=IconChevronUp.js.map