import * as React from "react";
class IconFutbolO extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--futbol-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M13.6 18.2l6.4-4.6 6.4 4.6-2.4 7.5h-7.9zM20 0q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4T40 20t-1.6 7.8-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0zm13.8 30.1q3.3-4.5 3.3-10.1v-.1l-2.2 2-5.4-5 1.4-7.2 3 .3q-3.3-4.6-8.7-6.3l1.2 2.8L20 10l-6.4-3.5 1.2-2.8Q9.4 5.4 6.1 10l3-.3 1.4 7.2-5.4 5-2.2-2v.1q0 5.6 3.3 10.1l.7-2.9 7.2.9 3.1 6.6-2.6 1.6q2.7.8 5.4.8t5.4-.8l-2.6-1.6 3.1-6.6 7.3-.9z" }))),
            !p.textFirst && textEl));
    }
}
IconFutbolO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFutbolO;
//# sourceMappingURL=IconFutbolO.js.map