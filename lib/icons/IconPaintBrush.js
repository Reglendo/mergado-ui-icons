import * as React from "react";
class IconPaintBrush extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--paint-brush ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M36 0q1.6 0 2.8 1T40 3.6Q40 5 39 7q-7.5 14-10.4 16.8-2.2 2-4.9 2-2.8 0-4.8-2t-2-4.9q0-2.9 2-4.8L33.1 1.2Q34.5 0 36 0zM15.8 23.1q.8 1.7 2.3 2.9t3.4 1.7v1.6q.1 4.7-2.9 7.7t-7.8 3Q8.1 40 6 39t-3.4-2.9-2-4.1-.6-4.9q.2.1.9.7t1.4 1 1.3.8 1 .4q1 0 1.3-.8.5-1.5 1.3-2.6t1.5-1.7 2-1 2.3-.6 2.8-.2z" }))),
            !p.textFirst && textEl));
    }
}
IconPaintBrush.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPaintBrush;
//# sourceMappingURL=IconPaintBrush.js.map