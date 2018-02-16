import * as React from "react";
class IconStackOverflow extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--stack-overflow ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.8 36.4h-25V25.7H3.2V40h32.1V25.7h-3.5v10.7zM10.7 24.7l.8-3.5L29 24.9l-.8 3.5zm2.3-8.3l1.5-3.3 16.2 7.6-1.5 3.2zm4.5-8l2.3-2.7 13.7 11.4-2.3 2.8zM26.4 0L37 14.3l-2.8 2.2L23.5 2.1zm-16 32.8v-3.5h17.8v3.5H10.4z" }))),
            !p.textFirst && textEl));
    }
}
IconStackOverflow.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStackOverflow;
//# sourceMappingURL=IconStackOverflow.js.map