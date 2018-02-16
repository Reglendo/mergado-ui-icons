import * as React from "react";
import shallowCompare from "shallow-compare";
class IconMailForward extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--mail-forward ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M40 14.3q0 .6-.4 1L28.1 26.7q-.4.4-1 .4t-1-.4-.4-1V20h-5q-2.2 0-3.9.1t-3.4.5-3 1T8 23.1t-1.7 2.3-1.1 3.1-.4 4q0 1.2.1 2.7v.6q0 .4.1.6 0 .3-.2.5t-.5.2q-.4 0-.6-.3-.2-.2-.3-.5t-.3-.7-.3-.5Q0 28.7 0 25q0-4.4 1.2-7.4 3.6-9 19.5-9h5V2.9q0-.6.4-1t1-.5 1 .5l11.5 11.4q.4.4.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconMailForward.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMailForward;
//# sourceMappingURL=IconMailForward.js.map