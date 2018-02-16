import * as React from "react";
class IconYahoo extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--yahoo ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M22.2 21.4l.3 15.7q-1.4-.2-2.4-.2-.9 0-2.3.2l.3-15.7q-.9-1.6-3.8-6.6T9.5 6.4 5.4 0q1.3.3 2.4.3 1 0 2.5-.3 1.4 2.5 3 5.1t3.7 6.2 3.1 5.1q.8-1.4 2.5-4t2.6-4.2 2.3-4T29.9 0q1.2.3 2.4.3 1.3 0 2.6-.3-.7.9-1.4 2t-1.1 1.7-1.3 2.2-1 1.8q-3.3 5.6-7.9 13.7z" }))),
            !p.textFirst && textEl));
    }
}
IconYahoo.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconYahoo;
//# sourceMappingURL=IconYahoo.js.map