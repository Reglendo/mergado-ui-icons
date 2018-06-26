import * as React from "react";
class IconTwitterSquare extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--twitter-square ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.6 13.6q-1.3.6-2.7.8 1.5-.9 2-2.6-1.4.8-2.9 1.1-1.4-1.5-3.5-1.5-1.9 0-3.3 1.4t-1.3 3.3q0 .7.1 1.1-2.9-.2-5.4-1.5t-4.3-3.4q-.7 1.1-.7 2.3 0 2.6 2.1 3.9-1.1 0-2.3-.5 0 1.7 1.1 3t2.8 1.6q-.7.2-1.1.2-.3 0-.9-.1.4 1.4 1.6 2.3t2.8 1q-2.6 2-5.9 2-.6 0-1.1-.1Q12 30 15.9 30q2.5 0 4.7-.8t3.7-2.1T27 24t1.7-3.6.5-3.7V16q1.4-1 2.4-2.4zm5.7-4.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconTwitterSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTwitterSquare;
//# sourceMappingURL=IconTwitterSquare.js.map