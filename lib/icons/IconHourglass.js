import * as React from "react";
import shallowCompare from "shallow-compare";
class IconHourglass extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--hourglass ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M36.6 35.7q.3 0 .5.2t.2.5v2.9q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2t-.2-.5v-2.9q0-.3.2-.5t.5-.2h32.9zM5.9 34.3q.1-1.2.4-2.4t.6-2.1 1.1-2 1.2-1.7 1.4-1.5 1.5-1.4 1.5-1.2 1.5-1 1.5-1q-1-.6-1.5-1t-1.5-1-1.5-1.2-1.5-1.4-1.4-1.5T8 12.2t-1.1-2-.6-2.1-.4-2.4h28.5q-.1 1.2-.4 2.4t-.6 2.1-1.1 2-1.2 1.7-1.4 1.5-1.5 1.4-1.6 1.2-1.4 1-1.5 1q1 .6 1.5 1t1.4 1 1.6 1.3 1.5 1.3 1.4 1.5 1.2 1.7 1.1 2 .6 2.1.4 2.4H5.9zM36.6 0q.3 0 .5.2t.2.5v2.9q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2T3 3.6V.7q0-.3.2-.5t.5-.2h32.9z" }))),
            !p.textFirst && textEl));
    }
}
IconHourglass.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHourglass;
//# sourceMappingURL=IconHourglass.js.map