import * as React from "react";
class IconObjectUngroup extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--object-ungroup ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M40.3 17.8h-2.2V29h2.2v6.7h-6.7v-2.3H17.9v2.3h-6.7V29h2.2v-2.3H6.7V29H0v-6.8h2.2V11H0V4.3h6.7v2.3h15.7V4.3h6.7V11h-2.2v2.3h6.7V11h6.7v6.8zm-4.4-4.5v2.2h2.2v-2.2h-2.2zM24.7 6.6v2.2h2.2V6.6h-2.2zm-22.5 0v2.2h2.3V6.6H2.2zm2.3 20.1v-2.2H2.2v2.2h2.3zm22.4-2.2h-2.2v2.2h2.2v-2.2zm-20.2 0h15.7v-2.3h2.3V11h-2.3V8.8H6.7V11H4.5v11.2h2.2v2.3zm9 8.9v-2.2h-2.3v2.2h2.3zm22.4 0v-2.2h-2.2v2.2h2.2zM35.9 29V17.8h-2.3v-2.3h-6.7v6.7h2.2V29h-6.7v-2.3h-6.7V29h2.2v2.2h15.7V29h2.3z" }))),
            !p.textFirst && textEl));
    }
}
IconObjectUngroup.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconObjectUngroup;
//# sourceMappingURL=IconObjectUngroup.js.map