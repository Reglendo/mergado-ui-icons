import * as React from "react";
import shallowCompare from "shallow-compare";
class IconHddO extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--hdd-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M26.2 27.1q0 .8-.5 1.3t-1.3.5-1.2-.5-.6-1.3.6-1.2 1.2-.5 1.3.5.5 1.2zm5.7 0q0 .8-.5 1.3t-1.3.5-1.2-.5-.5-1.3.5-1.2 1.2-.5 1.3.5.5 1.2zm2.5 3.6v-7.1q0-.3-.2-.5t-.5-.2H6.6q-.3 0-.5.2t-.2.5v7.1q0 .3.2.5t.5.2h27.1q.3 0 .5-.2t.2-.5zM7 20h26.3L29.8 9.2q-.1-.2-.4-.4t-.5-.2H11.4q-.3 0-.6.2t-.3.4zm30.3 3.6v7.1q0 1.5-1.1 2.5t-2.5 1.1H6.6q-1.5 0-2.6-1.1t-1-2.5v-7.1q0-.6.4-1.7L7.8 8.4q.3-1.2 1.4-2t2.2-.7h17.5q1.2 0 2.2.7t1.4 2l4.4 13.5q.4 1.1.4 1.7z" }))),
            !p.textFirst && textEl));
    }
}
IconHddO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHddO;
//# sourceMappingURL=IconHddO.js.map