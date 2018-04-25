import * as React from "react";
class IconCloud extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--cloud ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M39.9 25.3q0 3.3-2.4 5.7t-5.6 2.3H9.3q-3.8 0-6.6-2.7T0 24q0-2.8 1.5-5t3.9-3.4q-.1-.6-.1-.9 0-4.4 3.1-7.5t7.5-3.1q3.3 0 6 1.8t3.9 4.8q1.4-1.3 3.4-1.3 2.2 0 3.8 1.5t1.5 3.8q0 1.5-.8 2.8 2.7.7 4.4 2.8t1.8 5z" }))),
            !p.textFirst && textEl));
    }
}
IconCloud.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCloud;
//# sourceMappingURL=IconCloud.js.map