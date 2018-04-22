import * as React from "react";
import shallowCompare from "shallow-compare";
class IconCalendar extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--calendar ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M4.4 37.1h6.4v-6.4H4.4v6.4zm7.8 0h7.2v-6.4h-7.2v6.4zm-7.8-7.8h6.4v-7.2H4.4v7.2zm7.8 0h7.2v-7.2h-7.2v7.2zm-7.8-8.6h6.4v-6.4H4.4v6.4zm16.4 16.4h7.1v-6.4h-7.1v6.4zm-8.6-16.4h7.2v-6.4h-7.2v6.4zm17.2 16.4h6.4v-6.4h-6.4v6.4zm-8.6-7.8h7.1v-7.2h-7.1v7.2zM12.9 10V3.6q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5V10q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm16.5 19.3h6.4v-7.2h-6.4v7.2zm-8.6-8.6h7.1v-6.4h-7.1v6.4zm8.6 0h6.4v-6.4h-6.4v6.4zm.7-10.7V3.6q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5V10q0 .3.2.5t.5.2h1.5q.2 0 .5-.2t.2-.5zm8.5-1.4v28.5q0 1.2-.8 2.1t-2 .8H4.4q-1.2 0-2.1-.9t-.8-2V8.6q0-1.2.8-2t2.1-.9h2.8V3.6q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6V3.6q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 .9t.8 2z" }))),
            !p.textFirst && textEl));
    }
}
IconCalendar.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCalendar;
//# sourceMappingURL=IconCalendar.js.map