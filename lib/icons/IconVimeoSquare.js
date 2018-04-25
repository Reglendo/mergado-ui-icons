import * as React from "react";
class IconVimeoSquare extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--vimeo-square ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.8 14.2q.3-4.8-3.6-4.9-5.1-.2-6.9 5.8 1-.4 1.8-.4 1.9 0 1.7 2.1-.1 1.3-1.7 3.8T20.8 23q-1 0-1.9-3.8-.3-1.2-1-5.6-.6-4.3-3.5-4-1.4.2-3.7 2.2L7.1 15l1.1 1.5q1.7-1.1 2-1.1 1.3 0 2.4 4 .3 1.2 1 3.7t1 3.6q1.5 4 3.6 4 3.6 0 8.6-6.5 4.9-6.4 5-10zm5.5-4.9v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconVimeoSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconVimeoSquare;
//# sourceMappingURL=IconVimeoSquare.js.map