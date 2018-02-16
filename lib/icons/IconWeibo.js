import * as React from "react";
class IconWeibo extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--weibo ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M15.1 28.7q.4-.8.2-1.6t-1-1.1q-.8-.3-1.6 0t-1.4 1q-.5.8-.3 1.5t1 1.2 1.7 0 1.4-1zm2.1-2.7q.1-.3 0-.6t-.3-.4q-.4-.2-.7 0t-.5.4q-.3.7.3 1 .3.1.7 0t.5-.4zm3.8 2.3q-1 2.3-3.5 3.4t-5 .3q-2.4-.8-3.3-2.9t.2-4.1q1-2.1 3.4-3.1t4.7-.5q2.4.7 3.5 2.7t0 4.2zm7-3.5q-.2-2.2-2-3.8t-4.6-2.5-6.2-.4q-4.9.5-8.2 3.1t-3 5.9q.2 2.2 2 3.8t4.7 2.5 6.1.4q5-.5 8.3-3.1t2.9-5.9zm6.9.1q0 1.5-.8 3.1t-2.5 3-3.7 2.7-5.1 1.8-6 .7-6.2-.7-5.3-2.1T1.4 30 0 25.6q0-2.6 1.6-5.5T6 14.3q3.7-3.7 7.6-5.2t5.5.1q1.4 1.4.4 4.7-.1.3 0 .4t.2.2.4 0 .3-.1l.1-.1Q23.6 13 26 13t3.4 1.4q1 1.4 0 4 0 .3-.1.4t.1.3.3.2.3.1q1.3.4 2.3 1t1.8 1.9.8 2.6zm-1.7-14q1 1.1 1.3 2.5t-.2 2.6q-.2.5-.7.7t-.9.1q-.6-.1-.8-.6t-.1-1q.5-1.4-.5-2.5t-2.4-.8q-.6.1-1-.2t-.6-.8q-.1-.5.2-1t.8-.5q1.4-.3 2.7.1t2.2 1.4zm4.1-3.6q1.9 2.1 2.5 5t-.3 5.4q-.2.6-.8.8t-1.1.1-.9-.7-.1-1.2q.6-1.8.2-3.8T35 9.4q-1.4-1.6-3.3-2.2T27.8 7q-.6.2-1.1-.2t-.7-1 .2-1.1 1-.7q2.7-.5 5.4.3t4.7 3z" }))),
            !p.textFirst && textEl));
    }
}
IconWeibo.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconWeibo;
//# sourceMappingURL=IconWeibo.js.map