import * as React from "react";
class IconAngleDoubleRight extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--angle-double-right ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M22.3 21.4q0 .3-.2.5L11.7 32.3q-.3.3-.6.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.3-.2.5-.2t.6.2l10.4 10.4q.2.2.2.5zm8.6 0q0 .3-.3.5L20.2 32.3q-.2.3-.5.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.2-.2.5-.2t.5.2l10.4 10.4q.3.2.3.5z" }))),
            !p.textFirst && textEl));
    }
}
IconAngleDoubleRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAngleDoubleRight;
//# sourceMappingURL=IconAngleDoubleRight.js.map