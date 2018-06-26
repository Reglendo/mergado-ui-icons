import * as React from "react";
class IconRotateLeft extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--rotate-left ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3q-3.8 0-7.3-1.6T7 31q-.2-.3-.2-.5T7 30l3.1-3.1q.2-.2.5-.2.4.1.5.3 1.7 2.1 4 3.3t5 1.1q2.4 0 4.5-.9t3.6-2.4 2.5-3.7.9-4.4-.9-4.4-2.5-3.7-3.6-2.4-4.5-.9q-2.1 0-4.2.8t-3.5 2.2l3 3.1q.7.7.3 1.6-.3.8-1.3.8h-10q-.5 0-1-.4t-.4-1v-10q0-.9.9-1.3t1.5.3l2.9 2.9q2.4-2.3 5.5-3.5t6.3-1.2q3.5 0 6.7 1.3t5.5 3.7 3.6 5.4 1.4 6.7z" }))),
            !p.textFirst && textEl));
    }
}
IconRotateLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconRotateLeft;
//# sourceMappingURL=IconRotateLeft.js.map