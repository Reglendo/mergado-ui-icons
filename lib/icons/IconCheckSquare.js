import * as React from "react";
class IconCheckSquare extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--check-square ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M18.3 29L32 15.3q.4-.4.4-1t-.4-1L29.7 11q-.4-.4-1-.4t-1 .4L17.3 21.4l-4.7-4.7q-.4-.4-1-.4t-1 .4L8.3 19q-.4.4-.4 1t.4 1l8 8q.4.4 1 .4t1-.4zm19-19.7v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconCheckSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCheckSquare;
//# sourceMappingURL=IconCheckSquare.js.map