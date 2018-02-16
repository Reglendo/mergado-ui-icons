import * as React from "react";
class IconPiedPiper extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--pied-piper ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M26.3 22.8q0 1.4-.8 2.4t-2 1q-1 0-1.6-.3v-6.2q.6-.4 1.6-.4 1.2 0 2 1t.8 2.5zm-7.6-9.6q0 1.4-.9 2.5t-2 1q-.9 0-1.5-.4v-6.1q.6-.4 1.5-.4 1.2 0 2 1t.9 2.4zm12.5 9.6q0-3-1.9-5.1t-4.8-2.1q-.4 0-.9.1-.5 1.7-1.7 3-1.9 2.1-4.7 2.3v14.2l4.7-1v-4.6q1.1.5 2.6.5 2.8 0 4.8-2.2t1.9-5.1zm-7.6-9.5q0-3-2-5.1t-4.8-2.1q-1.6 0-3.1.8H9.5v18.7l4.8-.9v-4.6q1.2.4 2.5.4 2.8 0 4.8-2.1t2-5.1zm13.7-4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconPiedPiper.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPiedPiper;
//# sourceMappingURL=IconPiedPiper.js.map