import * as React from "react";
class IconShareAlt extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--share-alt ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M30.1 22.9q3 0 5.1 2t2.1 5.1-2.1 5.1-5.1 2-5-2T23 30v-.8l-8-4q-2 1.9-4.9 1.9-2.9 0-5-2T3 20t2.1-5.1 5-2q2.9 0 4.9 1.9l8-4V10q0-3 2.1-5.1t5-2 5.1 2 2.1 5.1-2.1 5.1-5.1 2q-2.8 0-4.8-1.9l-8.1 4q.1.5.1.8t-.1.8l8.1 4q2-1.9 4.8-1.9z" }))),
            !p.textFirst && textEl));
    }
}
IconShareAlt.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconShareAlt;
//# sourceMappingURL=IconShareAlt.js.map