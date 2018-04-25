import * as React from "react";
class IconShield extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--shield ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M29.8 21.4V7.1h-10v25.4q2.6-1.4 4.7-3 5.3-4.1 5.3-8.1zm4.3-17.1v17.1q0 2-.8 3.8t-1.8 3.4-2.7 2.8-2.8 2.3-2.7 1.8-2 1.1-.9.4q-.3.1-.6.1t-.6-.1q-.4-.2-.9-.4t-2-1.1-2.7-1.8-2.9-2.3-2.6-2.8-1.9-3.4-.7-3.8V4.3q0-.6.4-1t1-.4h25.7q.6 0 1 .4t.5 1z" }))),
            !p.textFirst && textEl));
    }
}
IconShield.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconShield;
//# sourceMappingURL=IconShield.js.map