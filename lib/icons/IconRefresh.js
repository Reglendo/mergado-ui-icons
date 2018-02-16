import * as React from "react";
class IconRefresh extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--refresh ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M36.7 23.6v.1q-1.4 6-6 9.7t-10.6 3.7q-3.3 0-6.4-1.2t-5.4-3.5l-2.9 2.9q-.4.4-1 .4t-1-.4-.4-1v-10q0-.6.4-1t1-.4h10q.6 0 1 .4t.5 1-.5 1l-3 3q1.6 1.5 3.6 2.3t4.1.8q3 0 5.6-1.4t4.2-4q.2-.4 1.2-2.6.1-.5.6-.5H36q.3 0 .5.2t.2.5zm.6-17.9v10q0 .6-.4 1t-1 .4h-10q-.6 0-1-.4t-.5-1 .5-1l3-3.1q-3.3-3-7.8-3-2.9 0-5.5 1.4t-4.2 4q-.2.4-1.2 2.6-.2.5-.6.5H4.1q-.3 0-.5-.2t-.2-.5v-.1q1.5-6 6-9.7t10.7-3.7q3.3 0 6.4 1.2t5.4 3.5l3-2.9q.4-.4 1-.4t1 .4.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconRefresh.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconRefresh;
//# sourceMappingURL=IconRefresh.js.map