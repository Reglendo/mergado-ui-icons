import * as React from "react";
class IconPaypal extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--paypal ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M36.9 14.4q.4 1.9-.1 4.6-1.9 9.9-12.6 9.9h-1q-.5 0-1 .4t-.5.9l-.1.4-1.2 7.7-.1.4q-.1.6-.5.9t-1 .4h-5.6q-.5 0-.7-.3t-.2-.8q.2-1.3.6-3.8t.5-3.7.6-3.8.7-3.7q.1-.8.9-.8h2.9q3 0 5.3-.5 3.9-.9 6.4-3.2 2.3-2.1 3.5-5.5.5-1.6.7-3 .1-.1.1-.2t.1 0 .1.1q1.8 1.3 2.2 3.6zm-3.8-6.3q0 2.4-1.1 5.3-1.7 5.2-6.7 7-2.5.9-5.6 1h-4q-2.3 0-2.7 2.1 0 .2-1.9 11.8 0 .3-.2.3H4.3q-.5 0-.8-.4t-.3-.9L8.4 1.5Q8.5.9 9 .4t1.1-.4h13.4q.8 0 2.2.3t2.5.7q2.3.9 3.6 2.8t1.3 4.3z" }))),
            !p.textFirst && textEl));
    }
}
IconPaypal.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPaypal;
//# sourceMappingURL=IconPaypal.js.map