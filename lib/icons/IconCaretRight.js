import * as React from "react";
class IconCaretRight extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--caret-right ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M26.4 20q0 .6-.5 1l-10 10q-.4.4-1 .4t-1-.4-.4-1V10q0-.6.4-1t1-.4 1 .4l10 10q.5.4.5 1z" }))),
            !p.textFirst && textEl));
    }
}
IconCaretRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCaretRight;
//# sourceMappingURL=IconCaretRight.js.map