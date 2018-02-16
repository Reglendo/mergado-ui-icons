import * as React from "react";
import shallowCompare from "shallow-compare";
class IconPaperPlane extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--paper-plane ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M39.4.2q.7.6.6 1.5L34.3 36q-.1.6-.7 1-.4.1-.7.1-.3 0-.6-.1l-10.1-4.1-5.4 6.6q-.4.5-1.1.5-.3 0-.5-.1-.4-.1-.7-.5t-.2-.8v-7.8L33.6 7.1 9.7 27.8.9 24.2q-.8-.3-.9-1.3 0-.8.7-1.3L37.9.2q.3-.2.7-.2.4 0 .8.2z" }))),
            !p.textFirst && textEl));
    }
}
IconPaperPlane.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPaperPlane;
//# sourceMappingURL=IconPaperPlane.js.map