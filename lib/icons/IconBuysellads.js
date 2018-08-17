import * as React from "react";
class IconBuysellads extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--buysellads ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M23.4 24.2h-6.5l3.2-12.3zm1.9 7.2h7L25.1 8.6h-9.9L8 31.4h6.9l8.6-7zm12-22.1v21.4q0 2.6-1.9 4.5t-4.5 1.9H9.4q-2.6 0-4.5-1.9T3 30.7V9.3q0-2.6 1.9-4.5t4.5-1.9h21.5q2.6 0 4.5 1.9t1.9 4.5z" }))),
            !p.textFirst && textEl));
    }
}
IconBuysellads.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBuysellads;
//# sourceMappingURL=IconBuysellads.js.map