import * as React from "react";
class IconTrophy extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--trophy ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M11.7 19.7q-1.6-3.6-1.6-8.3H4.4v2.2q0 1.7 2.1 3.6t5.2 2.5zm24.1-6.1v-2.2h-5.7q0 4.7-1.7 8.3 3.2-.6 5.3-2.5t2.1-3.6zm2.8-2.9v2.9q0 1.6-.9 3.2t-2.5 2.9-3.8 2.1-4.9 1q-.9 1.2-2.1 2.2-.8.7-1.1 1.6t-.4 2q0 1.2.7 2t2.2.8q1.7 0 3 1t1.3 2.6v1.4q0 .3-.2.5t-.5.2H10.8q-.3 0-.5-.2t-.2-.5V35q0-1.5 1.3-2.6t3-1q1.5 0 2.1-.8t.7-2q0-1.2-.3-2T15.7 25q-1.2-1-2.1-2.2-2.5-.1-4.8-1t-3.9-2.1-2.5-2.9-.9-3.2v-2.9q0-.9.6-1.5t1.5-.6h6.5V6.4q0-1.4 1-2.5t2.5-1h12.9q1.5 0 2.5 1t1.1 2.5v2.2h6.4q.9 0 1.5.6t.6 1.5z" }))),
            !p.textFirst && textEl));
    }
}
IconTrophy.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTrophy;
//# sourceMappingURL=IconTrophy.js.map