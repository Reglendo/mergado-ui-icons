import * as React from "react";
import shallowCompare from "shallow-compare";
class IconAsterisk extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--asterisk ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M34.6 23.4q1 .6 1.3 1.8t-.3 2.1l-1.4 2.5q-.6 1-1.7 1.3t-2.2-.3l-5.9-3.4v6.9q0 1.1-.9 2t-2 .8h-2.9q-1.1 0-2-.8t-.8-2v-6.9l-6 3.4q-1 .6-2.1.3t-1.8-1.3l-1.4-2.5q-.6-1-.3-2.1t1.4-1.8l5.9-3.4-5.9-3.4q-1.1-.6-1.4-1.8t.3-2.1l1.4-2.5q.6-1 1.8-1.3t2.1.3l6 3.4V5.7q0-1.1.8-2t2-.8h2.9q1.2 0 2 .8t.9 2v6.9l5.9-3.4q1-.6 2.2-.3t1.7 1.3l1.4 2.5q.6 1 .3 2.1t-1.3 1.8l-6 3.4z" }))),
            !p.textFirst && textEl));
    }
}
IconAsterisk.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAsterisk;
//# sourceMappingURL=IconAsterisk.js.map