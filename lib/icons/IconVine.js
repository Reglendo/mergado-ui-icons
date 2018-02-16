import * as React from "react";
class IconVine extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--vine ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M36.4 18.5v4.4q-2.2.5-4.4.5-1.5 3-3.7 6t-4 4.9-2.9 2.3q-1.8 1-3.6 0-.6-.4-1.4-1t-1.9-1.9-2.3-2.8-2.4-4.1-2.3-5.5-2.1-7-1.5-8.7h6.3q.6 4.8 1.6 8.9t2.3 7.1 2.7 5.2 3.1 4.4q3.8-3.8 6.4-9.1-3.1-1.6-4.9-4.9t-1.9-7.4q0-4.3 2.4-7.1T28.2 0q4 0 6.1 2.4T36.4 9q0 3.5-1.3 6.4h-.4q-.3 0-1 .1t-1.4-.1-1.4-.6-1.2-1.2q.7-2.3.7-4.1 0-1.9-.6-2.9t-1.8-1q-1.2 0-1.9 1.1t-.7 3.1q0 4.2 2.4 6.6t5.9 2.4q1.4 0 2.7-.3z" }))),
            !p.textFirst && textEl));
    }
}
IconVine.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconVine;
//# sourceMappingURL=IconVine.js.map