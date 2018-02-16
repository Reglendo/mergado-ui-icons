import * as React from "react";
class IconTint extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--tint ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M19.9 25.7q0-.8-.4-1.5l-.4-.5q-.4-.5-.5-.9t-.6-1-.5-1.1q0-.3-.4-.3t-.5.3q-.2.5-.5 1.1t-.5 1-.6.9-.3.5q-.5.7-.5 1.5 0 1.2.9 2t2 .9 2-.9.8-2zm11.5-2.8q0 4.7-3.4 8t-8.1 3.4-8.1-3.4-3.3-8q0-3.3 1.8-6.2.1-.2 1.4-2t2.3-3.4 2.2-3.9T18 2.9q.2-.7.8-1.1t1.1-.4 1.2.4.7 1.1q.7 2 1.9 4.5t2.2 3.9 2.3 3.4 1.3 2q1.9 2.9 1.9 6.2z" }))),
            !p.textFirst && textEl));
    }
}
IconTint.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTint;
//# sourceMappingURL=IconTint.js.map