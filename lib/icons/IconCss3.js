import * as React from "react";
class IconCss3 extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--css3 ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M6.1 2.9h33.6l-5.9 29.7-18 6-15.5-6 1.6-7.9h6.6l-.7 3.2 9.5 3.6 10.8-3.6 1.5-7.5H2.7L4 13.7h26.9l.9-4.2h-27z" }))),
            !p.textFirst && textEl));
    }
}
IconCss3.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCss3;
//# sourceMappingURL=IconCss3.js.map