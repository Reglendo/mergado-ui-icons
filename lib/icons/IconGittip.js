import * as React from "react";
import shallowCompare from "shallow-compare";
class IconGittip extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--gittip ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M20.3 29.1l7.8-10.6q.3-.5.5-1.3t-.1-1.9-1.4-1.8q-.9-.6-1.8-.5t-1.7.4-1.2 1q-.8.8-2.1.8-1.4 0-2.2-.8-.5-.7-1.2-1t-1.6-.4-1.9.5q-1 .7-1.4 1.8t-.1 1.9.6 1.3zm17-9.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconGittip.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGittip;
//# sourceMappingURL=IconGittip.js.map