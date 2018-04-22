import * as React from "react";
import shallowCompare from "shallow-compare";
class IconEmpire extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--empire ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M19.5 36.6V38q-4.6-.1-8.6-2.4t-6.3-6.2l1.3-.7q.6 1.1 1.6 2.2L9 29.6q3.3 3.8 8.2 4.8l-.4 1.9q1.5.2 2.7.3zM6.2 24.7l-1.9.7q.5 1.3 1.1 2.5l-1.3.7q-2.2-4-2.2-8.6t2.2-8.6l1.3.7q-.7 1.3-1.1 2.5l1.8.7q-.7 2.2-.7 4.7 0 2.4.8 4.7zm27.9 4l1.3.7q-2.4 3.9-6.3 6.2T20.5 38v-1.4q1.2-.1 2.7-.3l-.4-1.9q4.9-1 8.2-4.8l1.5 1.3q1-1.1 1.6-2.2zm-3.4-12.4l-5.2 1.8q.3.9.3 1.9t-.3 1.9l5.2 1.8q-.7 2-2.2 3.8l-4.1-3.7q-1.3 1.5-3.3 1.9l1.1 5.4q-1.2.2-2.2.2t-2.2-.2l1.1-5.4q-2-.4-3.3-1.9l-4.1 3.7q-1.5-1.8-2.2-3.8l5.2-1.8q-.3-.9-.3-1.9t.3-1.9l-5.2-1.8q.7-2.1 2.2-3.8l4.1 3.7q1.3-1.6 3.3-2l-1.1-5.3q1-.2 2.2-.2t2.2.2l-1.1 5.3q2 .4 3.3 2l4.1-3.7q1.5 1.7 2.2 3.8zM19.5 2v1.4q-1.4.1-2.7.3l.4 1.9q-4.9 1-8.2 4.8L7.5 9.1q-.8.9-1.6 2.2l-1.3-.7Q7 6.7 10.9 4.4T19.5 2zm18.6 18q0 4.6-2.2 8.6l-1.3-.7q.6-1.2 1.1-2.5l-1.9-.7q.8-2.3.8-4.7 0-2.5-.7-4.7l1.8-.7q-.4-1.2-1.1-2.5l1.3-.7q2.2 4 2.2 8.6zm-2.7-9.4l-1.3.7q-.8-1.3-1.6-2.2L31 10.4q-3.3-3.8-8.2-4.8l.4-1.9q-1.3-.2-2.7-.3V2q4.7.1 8.6 2.4t6.3 6.2zM39 20q0-3.9-1.5-7.4t-4-6.1-6.1-4T20 1t-7.4 1.5-6.1 4-4 6.1T1 20t1.5 7.4 4 6.1 6.1 4T20 39t7.4-1.5 6.1-4 4-6.1T39 20zm1 0q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0t7.8 1.6 6.4 4.2 4.2 6.4T40 20z" }))),
            !p.textFirst && textEl));
    }
}
IconEmpire.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconEmpire;
//# sourceMappingURL=IconEmpire.js.map