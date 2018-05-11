import * as React from "react";
class IconWheelchair extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--wheelchair ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M24.8 26.5l2.3 4.5q-1.3 4-4.7 6.5T14.9 40q-3.5 0-6.5-1.7t-4.7-4.7T2 27.1q0-4 2.3-7.3t6.2-4.7l.3 2.9q-2.7 1.2-4.3 3.7t-1.6 5.4q0 4.2 2.9 7.1t7.1 2.9q2.8 0 5.1-1.4t3.7-3.9 1.1-5.3zm12.3 2.2l1.3 2.6-5.8 2.8q-.2.2-.6.2-.9 0-1.3-.8l-5.3-10.6H14.9q-.6 0-1-.4t-.5-.9L11.3 4.2q-.1-.4.1-.9.3-1.2 1.3-1.9t2.2-.7q1.4 0 2.5 1.1t1 2.5q0 1.5-1.1 2.6t-2.7.9l.8 6.5h9.5v2.8h-9.1l.3 2.9h10.2q.9 0 1.3.8l5 10.1z" }))),
            !p.textFirst && textEl));
    }
}
IconWheelchair.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconWheelchair;
//# sourceMappingURL=IconWheelchair.js.map