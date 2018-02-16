import * as React from "react";
class IconEraser extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--eraser ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M18.6 30.6l7-7.9h-16l-6.9 7.9h15.9zm21-22.3q.4.7.2 1.5t-.6 1.3L20.6 32.4q-.8.9-2 .9H2.7q-.8 0-1.5-.4t-1-1.2q-.3-.7-.2-1.5t.7-1.3L19.3 7.6q.8-.9 2-.9h15.9q.8 0 1.5.4t.9 1.2z" }))),
            !p.textFirst && textEl));
    }
}
IconEraser.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconEraser;
//# sourceMappingURL=IconEraser.js.map