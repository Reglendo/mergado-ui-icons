import * as React from "react";
class IconAngleDoubleUp extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--angle-double-up ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31 29.3q0 .3-.2.5l-1.1 1.1q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.1q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.3.6-.3t.5.3l10.4 10.4q.2.2.2.5zm0-8.6q0 .3-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3l-8.7-8.7-8.8 8.7q-.2.3-.5.3t-.5-.3l-1.2-1.1q-.2-.2-.2-.5t.2-.5L19.3 9.8q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconAngleDoubleUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAngleDoubleUp;
//# sourceMappingURL=IconAngleDoubleUp.js.map