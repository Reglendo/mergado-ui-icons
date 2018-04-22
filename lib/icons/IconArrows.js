import * as React from "react";
import shallowCompare from "shallow-compare";
class IconArrows extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--arrows ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M40 20q0 .6-.4 1l-5.7 5.7q-.5.4-1 .4t-1-.4-.5-1v-2.8h-8.5v8.5h2.8q.6 0 1 .5t.4 1-.4 1L21 39.6q-.4.4-1 .4t-1-.4l-5.7-5.7q-.4-.5-.4-1t.4-1 1-.5h2.8v-8.5H8.6v2.8q0 .6-.5 1t-1 .4-1-.4L.4 21q-.4-.4-.4-1t.4-1l5.7-5.7q.5-.4 1-.4t1.1.4.4 1v2.8h8.5V8.6h-2.8q-.6 0-1-.5t-.4-1 .4-1L19 .4q.4-.4 1-.4t1 .4l5.7 5.7q.4.5.4 1t-.4 1-1 .5h-2.8v8.5h8.5v-2.8q0-.6.5-1t1-.4 1 .4l5.7 5.7q.4.4.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconArrows.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrows;
//# sourceMappingURL=IconArrows.js.map