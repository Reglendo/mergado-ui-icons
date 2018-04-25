import * as React from "react";
class IconLinkedin extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--linkedin ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M10.8 13.9v22.2H3.4V14h7.4zm.5-6.8q0 1.7-1.2 2.7t-3 1.1q-1.9 0-3-1.1T3 7.1q0-1.6 1.2-2.7t3-1.1 2.9 1.1 1.2 2.7zm26 16.3v12.7h-7.4V24.2q0-2.3-.9-3.6t-2.8-1.4q-1.4 0-2.3.8t-1.5 1.9q-.2.7-.2 1.8v12.4h-7.3V14h7.3v3.2h-.1q.5-.7 1-1.3t1.2-1.1 2-1 2.5-.4q3.8 0 6.2 2.6t2.3 7.4z" }))),
            !p.textFirst && textEl));
    }
}
IconLinkedin.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLinkedin;
//# sourceMappingURL=IconLinkedin.js.map