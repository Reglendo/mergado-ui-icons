import * as React from "react";
class IconWhatsapp extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--whatsapp ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M25 21.7q.3 0 2.2 1t2 1.2v.3q0 .8-.4 1.7-.3.9-1.6 1.5T25 28q-1.3 0-4.3-1.4-2.2-1-3.8-2.6t-3.3-4.2Q12 17.5 12 15.5v-.2q.1-2 1.7-3.5.5-.5 1.2-.5h.4q.3 0 .4.1.4 0 .6.1t.3.6l.8 2q.6 1.5.5 1.7 0 .5-.8 1.3t-.7 1q0 .2.1.3.7 1.7 2.3 3.1 1.2 1.2 3.3 2.2.3.2.5.2.4 0 1.2-1.1t1.2-1.1zm-4.5 11.9q2.8 0 5.4-1.1t4.5-3 3-4.5 1.1-5.4-1.1-5.5-3-4.5-4.5-2.9-5.4-1.2T15 6.7t-4.5 2.9-2.9 4.5-1.2 5.5q0 4.5 2.7 8.2L7.4 33l5.4-1.8q3.5 2.4 7.7 2.4zm0-30.9q3.4 0 6.5 1.4t5.4 3.6 3.5 5.3 1.4 6.6-1.4 6.5-3.5 5.3T27 35t-6.5 1.4q-4.4 0-8.2-2.1l-9.3 3 3-9.1q-2.4-3.9-2.4-8.6 0-3.5 1.4-6.6t3.6-5.3 5.3-3.6 6.6-1.4z" }))),
            !p.textFirst && textEl));
    }
}
IconWhatsapp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconWhatsapp;
//# sourceMappingURL=IconWhatsapp.js.map