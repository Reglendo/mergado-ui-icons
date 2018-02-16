import * as React from "react";
class IconRa extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--ra ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M.4 19.5q.2-4.8 2.6-9.1t6.8-7.1h.1v.1q-.2.2-.6.8T8.1 5.9 6.8 8.3t-1 3.1-.3 3.3.8 3.5 2.5 3.5q1.1 1.1 2.2 1.5t2.1.3 1.5-.5 1.1-.8l.3-.3q.9-1.2 1.2-2.6t.2-2.8-.5-2.3-.6-1.8l-.3-.7q-.2-.5-.7-1.1t-1-.9-.9-.7-.8-.4l-.3-.1 2.3-2.6q.9.4 1.8 1.2t1.3 1.3l.4.6q0-1-.4-2.3t-.9-1.9l-.5-.7L19.9 0l3.6 4q-.7 1.1-1.2 2.3t-.5 2.1l-.1.7q.5-.8 1.4-1.6t1.5-1.2l.6-.4 2.3 2.6q-.9.3-1.9 1.1t-1.3 1.5l-.4.6q-.7 1.3-1.1 3t-.1 3.8 1.2 3.5q.8 1 1.8 1.3t1.9.1 1.7-.5 1.2-.8l.5-.4q1.3-1.1 2.2-2.5t1-2.7.3-2.7-.4-2.7-.9-2.4-1-2.1-1-1.6-.8-1l-.2-.4q-.4-.3-.2-.3l.2.1q.9.6 1.4 1T33 5.5t1.4 1.3 1.3 1.5T37 10t1 1.9.8 2.3.6 2.7.2 3q.1 5.8-2.4 10.4t-7 7.1T20 40q-4.1 0-7.8-1.6t-6.3-4.5-4.1-6.5-1.4-7.9z" }))),
            !p.textFirst && textEl));
    }
}
IconRa.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconRa;
//# sourceMappingURL=IconRa.js.map