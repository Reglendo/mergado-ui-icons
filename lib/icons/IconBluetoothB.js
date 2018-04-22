import * as React from "react";
import shallowCompare from "shallow-compare";
class IconBluetoothB extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--bluetooth-b ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M21.8 31.8l3.9-3.9-3.9-3.8v7.7zm0-15.9l3.9-3.8-3.9-3.9v7.7zm.7 4.1l8 7.9L18.4 40V24.1l-6.6 6.6-2.4-2.4 8.3-8.3-8.3-8.3 2.4-2.4 6.6 6.6V0l12.1 12.1z" }))),
            !p.textFirst && textEl));
    }
}
IconBluetoothB.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBluetoothB;
//# sourceMappingURL=IconBluetoothB.js.map