import * as React from "react";
import shallowCompare from "shallow-compare";
class IconSpinner extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--spinner ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M11.7 31.1q0 1.2-.8 2t-2 .9q-1.2 0-2-.9t-.9-2q0-1.2.9-2t2-.8 2 .8.8 2zm11.2 4.6q0 1.2-.9 2t-2 .9-2-.9-.9-2 .9-2 2-.8 2 .8.9 2zM7.1 20q0 1.2-.8 2t-2 .9-2-.9-.9-2 .9-2 2-.9 2 .9.8 2zM34 31.1q0 1.2-.9 2t-2 .9q-1.2 0-2-.9t-.8-2 .8-2 2-.8 2 .8.9 2zM12.5 8.9q0 1.5-1.1 2.5t-2.5 1.1-2.5-1.1-1.1-2.5 1.1-2.5 2.5-1.1 2.5 1.1 1.1 2.5zM38.6 20q0 1.2-.9 2t-2 .9-2-.9-.8-2 .8-2 2-.9 2 .9.9 2zM24.3 4.3q0 1.8-1.3 3t-3 1.3-3-1.3-1.3-3T17 1.2 20 0t3 1.3 1.3 3zm11.8 4.6q0 2.1-1.5 3.5t-3.5 1.5q-2.1 0-3.5-1.5t-1.5-3.5q0-2.1 1.5-3.5t3.5-1.5q2.1 0 3.5 1.5t1.5 3.5z" }))),
            !p.textFirst && textEl));
    }
}
IconSpinner.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSpinner;
//# sourceMappingURL=IconSpinner.js.map