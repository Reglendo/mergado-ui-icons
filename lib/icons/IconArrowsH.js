import * as React from "react";
class IconArrowsH extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrows-h ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M40 20q0 .6-.4 1l-5.7 5.7q-.5.4-1 .4t-1-.4-.5-1v-2.8H8.6v2.8q0 .6-.5 1t-1 .4-1-.4L.4 21q-.4-.4-.4-1t.4-1l5.7-5.7q.5-.4 1-.4t1.1.4.4 1v2.8h22.8v-2.8q0-.6.5-1t1-.4 1 .4l5.7 5.7q.4.4.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowsH.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowsH;
//# sourceMappingURL=IconArrowsH.js.map