import * as React from "react";
class IconBattery1 extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--battery-1 ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M4.5 26.7V13.3h8.9v13.4H4.5zm33.6-12.3q.9 0 1.6.7t.6 1.5v6.8q0 .9-.6 1.5t-1.6.7v2.8q0 1.2-.8 2t-2 .8H2.8q-1.2 0-2-.8t-.8-2V11.6q0-1.2.8-2t2-.8h32.5q1.1 0 2 .8t.8 2v2.8zm0 9v-6.8h-2.2v-5q0-.2-.2-.4t-.4-.2H2.8q-.2 0-.4.2t-.2.4v16.8q0 .3.2.4t.4.2h32.5q.2 0 .4-.2t.2-.4v-5h2.2z" }))),
            !p.textFirst && textEl));
    }
}
IconBattery1.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBattery1;
//# sourceMappingURL=IconBattery1.js.map