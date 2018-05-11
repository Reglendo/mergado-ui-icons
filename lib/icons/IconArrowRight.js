import * as React from "react";
class IconArrowRight extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrow-right ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M36.4 21.4q0 1.2-.9 2.1L21 38q-.9.8-2 .8-1.2 0-2-.8l-1.7-1.7q-.9-.8-.9-2t.9-2l6.5-6.6H6.1q-1.1 0-1.9-.8t-.7-2V20q0-1.2.7-2t1.9-.9h15.7l-6.5-6.5q-.9-.8-.9-2t.9-2L17 4.9q.8-.9 2-.9t2 .9l14.5 14.5q.9.8.9 2z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowRight;
//# sourceMappingURL=IconArrowRight.js.map