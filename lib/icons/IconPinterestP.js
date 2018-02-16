import * as React from "react";
import shallowCompare from "shallow-compare";
class IconPinterestP extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--pinterest-p ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M5.5 13.3q0-2.4.8-4.5t2.3-3.7T12 2.3 16.2.6t4.5-.6q3.5 0 6.5 1.5t5 4.3 1.9 6.4q0 2.2-.5 4.2t-1.3 4-2.2 3.3-3.3 2.3-4.2.9q-1.5 0-3-.8t-2.1-1.9q-.3.8-.7 2.5t-.5 2.1-.4 1.6-.6 1.6-.7 1.4-1.1 1.7-1.4 1.9l-.3.1-.2-.2q-.3-3.5-.3-4.2 0-2 .5-4.6t1.5-6.4 1.1-4.5q-.7-1.5-.7-3.8 0-1.9 1.2-3.5t2.9-1.6q1.4 0 2.1.9t.8 2.3q0 1.5-1 4.2t-1 4.2q0 1.4 1 2.3t2.5 1q1.2 0 2.3-.6t1.7-1.5 1.3-2.1.8-2.5.4-2.5.2-2.2q0-3.9-2.5-6t-6.3-2.2q-4.5 0-7.5 2.9t-3 7.4q0 .9.3 1.9t.6 1.4.6 1 .3.7q0 .6-.3 1.6t-.9 1h-.3q-1.2-.4-2.1-1.3t-1.3-2.1-.8-2.4-.2-2.4z" }))),
            !p.textFirst && textEl));
    }
}
IconPinterestP.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPinterestP;
//# sourceMappingURL=IconPinterestP.js.map