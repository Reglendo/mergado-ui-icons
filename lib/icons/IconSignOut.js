import * as React from "react";
import shallowCompare from "shallow-compare";
class IconSignOut extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--sign-out ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M16.8 32.1v1.6q0 .3-.3.4t-.4.2H8.9q-2.6 0-4.5-1.9t-1.9-4.5V12.1q0-2.6 1.9-4.5t4.5-1.9h7.2q.3 0 .5.2t.2.5V8q0 .3-.3.4t-.4.2H8.9q-1.4 0-2.5 1t-1 2.5v15.8q0 1.4 1 2.5t2.5 1h7l.2.1h.3l.2.1.1.2.1.3zM37.5 20q0 .6-.4 1L24.9 33.1q-.4.5-1 .5t-1-.5-.4-1v-6.4h-10q-.6 0-1-.4t-.4-1v-8.6q0-.6.4-1t1-.4h10V7.9q0-.6.4-1t1-.5 1 .5L37.1 19q.4.4.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconSignOut.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSignOut;
//# sourceMappingURL=IconSignOut.js.map