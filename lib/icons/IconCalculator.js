import * as React from "react";
import shallowCompare from "shallow-compare";
class IconCalculator extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--calculator ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M10.1 34.3q0-1.2-.9-2t-2-.9-2 .9-.8 2 .8 2 2 .8 2-.8.9-2zm8.5 0q0-1.2-.8-2t-2-.9-2 .9-.9 2 .9 2 2 .8 2-.8.8-2zm-8.5-8.6q0-1.2-.9-2t-2-.8-2 .8-.8 2 .8 2 2 .9 2-.9.9-2zm17.1 8.6q0-1.2-.8-2t-2-.9-2.1.9-.8 2 .8 2 2.1.8 2-.8.8-2zm-8.6-8.6q0-1.2-.8-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.8-2zm-8.5-8.6q0-1.1-.9-2t-2-.8-2 .8-.8 2 .8 2.1 2 .8 2-.8.9-2.1zm17.1 8.6q0-1.2-.8-2t-2-.8-2.1.8-.8 2 .8 2 2.1.9 2-.9.8-2zm-8.6-8.6q0-1.1-.8-2t-2-.8-2 .8-.9 2 .9 2.1 2 .8 2-.8.8-2.1zm17.2 17.2v-8.6q0-1.1-.9-2t-2-.8-2 .8-.8 2v8.6q0 1.1.8 2t2 .8 2-.8.9-2zm-8.6-17.2q0-1.1-.8-2t-2-.8-2.1.8-.8 2 .8 2.1 2.1.8 2-.8.8-2.1zm8.6-7.1V4.3q0-.6-.4-1t-1-.4H5.8q-.6 0-1 .4t-.4 1V10q0 .6.4 1t1 .4h28.6q.5 0 1-.4t.4-1zm0 7.1q0-1.1-.9-2t-2-.8-2 .8-.8 2 .8 2.1 2 .8 2-.8.9-2.1zm2.8-14.2v34.2q0 1.2-.8 2.1t-2 .8H4.4q-1.2 0-2.1-.8t-.8-2.1V2.9q0-1.2.8-2.1T4.4 0h31.4q1.1 0 2 .8t.8 2.1z" }))),
            !p.textFirst && textEl));
    }
}
IconCalculator.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCalculator;
//# sourceMappingURL=IconCalculator.js.map