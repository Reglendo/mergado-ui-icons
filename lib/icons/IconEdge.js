import * as React from "react";
class IconEdge extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--edge ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M1.5 17.7h.1q.3-2.8 1.3-5.3t2.5-4.9 3.8-3.9 5-2.6 6.1-1q5.2 0 9.3 2.4t6.5 6.7q2.4 4.2 2.4 9.9v4.2H13.3q.1 2.5 1.2 4.3t3.1 2.7 4.2 1.3 4.8.1 4.6-1.1 3.9-1.9v8.5q-2.1 1.2-5.1 2t-7 .9-7.1-1.2q-4.2-1.7-6.9-5.6t-2.8-8.3q-.1-5.4 2.5-9.2t7.2-6q-1 1.4-1.7 2.8t-1 3.6h14.1q.2-1.7-.1-3.1t-1.1-2.3-1.6-1.5-1.8-.9-1.6-.5-1.3-.1l-.5-.1q-3 .1-5.8 1t-5 2.4-3.9 3.1-3.1 3.6z" }))),
            !p.textFirst && textEl));
    }
}
IconEdge.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconEdge;
//# sourceMappingURL=IconEdge.js.map