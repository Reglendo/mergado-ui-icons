import * as React from "react";
import shallowCompare from "shallow-compare";
class IconExpand extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--expand ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M19.9 23.6q0 .3-.3.5l-7.4 7.4 3.2 3.2q.5.4.5 1t-.5 1-1 .4h-10q-.6 0-1-.4t-.4-1v-10q0-.6.4-1t1-.4 1 .4l3.2 3.2 7.5-7.4q.2-.2.5-.2t.5.2l2.5 2.6q.3.2.3.5zM37.3 4.3v10q0 .6-.4 1t-1 .4-1-.4l-3.3-3.2-7.4 7.4q-.2.2-.5.2t-.5-.2l-2.5-2.6q-.3-.2-.3-.5t.3-.5l7.4-7.4-3.2-3.2q-.5-.4-.5-1t.5-1 1-.4h10q.5 0 1 .4t.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconExpand.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconExpand;
//# sourceMappingURL=IconExpand.js.map