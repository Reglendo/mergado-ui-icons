import * as React from "react";
class IconLevelDown extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--level-down ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M9.2 5.7h15.7q.3 0 .5.2t.2.6v19.2h4.3q.9 0 1.3.8t-.2 1.6l-7.1 8.6q-.4.4-1.1.4t-1.1-.4l-7.1-8.6q-.6-.7-.2-1.6.4-.8 1.2-.8h4.3V11.4h-7.1q-.3 0-.6-.2L8.7 6.9q-.3-.3-.1-.8.2-.4.6-.4z" }))),
            !p.textFirst && textEl));
    }
}
IconLevelDown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLevelDown;
//# sourceMappingURL=IconLevelDown.js.map