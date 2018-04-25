import * as React from "react";
class IconArrowCircleRight extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrow-circle-right ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.7 20q0-.6-.4-1L21.2 8.9q-.4-.4-1-.4t-1 .4l-2.1 2q-.4.4-.4 1t.4 1l4.3 4.2H10.1q-.5 0-1 .5t-.4 1v2.8q0 .6.4 1t1 .5h11.3l-4.3 4.2q-.4.4-.4 1t.4 1l2.1 2q.4.4 1 .4t1-.4L31.3 21q.4-.4.4-1zm5.6 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowCircleRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowCircleRight;
//# sourceMappingURL=IconArrowCircleRight.js.map