import * as React from "react";
class IconArrowCircleLeft extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrow-circle-left ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.6 21.4v-2.8q0-.6-.5-1t-1-.5H18.9l4.3-4.2q.4-.4.4-1t-.4-1l-2.1-2q-.4-.4-1-.4t-1 .4L9 19q-.4.4-.4 1t.4 1l10.1 10.1q.4.4 1 .4t1-.4l2.1-2q.4-.4.4-1t-.4-1l-4.3-4.2h11.2q.6 0 1-.5t.5-1zm5.7-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowCircleLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowCircleLeft;
//# sourceMappingURL=IconArrowCircleLeft.js.map