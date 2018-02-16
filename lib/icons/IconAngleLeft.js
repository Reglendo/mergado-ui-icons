import * as React from "react";
class IconAngleLeft extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--angle-left ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M26.5 12.1q0 .3-.2.6l-8.8 8.7 8.8 8.8q.2.2.2.5t-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3L13.7 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.5-.2t.6.2l1.1 1.1q.2.2.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconAngleLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAngleLeft;
//# sourceMappingURL=IconAngleLeft.js.map