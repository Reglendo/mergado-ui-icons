import * as React from "react";
import shallowCompare from "shallow-compare";
class IconChain extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--chain ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M34 27.1q0-.8-.6-1.5L28.7 21q-.6-.6-1.5-.6t-1.6.7q.1 0 .4.4t.5.5.3.4.3.6.1.6q0 .9-.6 1.5t-1.5.6q-.4 0-.6-.1t-.6-.3-.4-.3-.5-.5-.4-.4q-.8.7-.8 1.6 0 .9.7 1.6l4.6 4.6q.6.6 1.5.6t1.5-.6l3.3-3.3q.6-.6.6-1.5zM18.3 11.4q0-.9-.6-1.5l-4.6-4.6q-.6-.7-1.5-.7t-1.6.6L6.8 8.5q-.7.6-.7 1.5t.7 1.5l4.6 4.7q.6.6 1.5.6 1 0 1.6-.7 0-.1-.4-.4t-.5-.5-.3-.4-.3-.6-.1-.6q0-.9.7-1.5t1.5-.7q.3 0 .6.1t.6.3.4.3.5.5.4.4q.7-.7.7-1.6zm20 15.7q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9T24 34.9l-4.6-4.6q-1.8-1.9-1.8-4.6 0-2.7 1.9-4.6l-1.9-2q-1.9 2-4.7 2-2.7 0-4.5-1.9l-4.7-4.6Q1.9 12.7 1.9 10t1.9-4.5L7 2.2Q8.9.4 11.6.4q2.7 0 4.5 1.9l4.6 4.6q1.9 1.8 1.9 4.5 0 2.8-2 4.7l2 1.9q1.9-1.9 4.6-1.9 2.7 0 4.6 1.8l4.6 4.7q1.9 1.9 1.9 4.5z" }))),
            !p.textFirst && textEl));
    }
}
IconChain.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChain;
//# sourceMappingURL=IconChain.js.map