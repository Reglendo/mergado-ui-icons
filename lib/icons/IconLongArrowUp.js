import * as React from "react";
class IconLongArrowUp extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--long-arrow-up ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.6 11q-.2.4-.7.4h-5v27.9q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5V11.4h-5q-.5 0-.6-.4t.1-.8l7.8-8.6q.2-.2.5-.2t.5.2l8 8.6q.3.4.1.8z" }))),
            !p.textFirst && textEl));
    }
}
IconLongArrowUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLongArrowUp;
//# sourceMappingURL=IconLongArrowUp.js.map