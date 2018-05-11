import * as React from "react";
class IconArrowCircleDown extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrow-circle-down ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.7 20q0-.6-.4-1l-2.1-2q-.4-.4-1-.4t-1 .4L23 21.2V10q0-.6-.4-1t-1-.4h-2.9q-.6 0-1 .4t-.4 1v11.2L13.1 17q-.5-.4-1-.4t-1 .4L9 19q-.4.4-.4 1t.4 1l10.1 10.1q.4.4 1 .4t1.1-.4L31.3 21q.4-.4.4-1zm5.6 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowCircleDown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowCircleDown;
//# sourceMappingURL=IconArrowCircleDown.js.map