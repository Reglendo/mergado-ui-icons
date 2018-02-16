import * as React from "react";
import shallowCompare from "shallow-compare";
class IconBlind extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--blind ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M12.7 6.9q-1.5 0-2.5-1t-1-2.4q0-1.5 1-2.5t2.5-1 2.4 1 1 2.5q0 1.4-1 2.4t-2.4 1zM25 21.3q0 1.1-.7 1.5t-1.4.1-1.1-.7l-8.2-9.8q-.1-.3-.3-.4t-.2 0l-.1.1q-.2.2.1.4l2.7 3.1v8l-3.6 10.2q-1.5 4.2-2 5.2-.4.6-.6.7-1.2.6-2.3 0-.7-.3-1-.9t-.2-1.3q.1-.4 4.4-13.8l.1-9.3-1.9 3.7.8 4.9q.1.6 0 1t-.3.6-.4.3-.4.2h-.2q-.4.1-.7 0t-.6-.4-.3-.5-.2-.4 0-.2l-1-6.7 4.7-8.5q.5-.8 2.5-.8 1.7 0 2.4.9l9.5 11.7.3.3v.1q.2.3.2.7zm-9 3.3q.9 2.5 1.9 5t1.6 3.8l.5 1.2q.8 2.1 1 2.8.2 1.6-.8 2.2-.8.5-1.5.3t-1.1-.5-.7-.7q-.1-.4-.2-.6l-2.8-7.8zm18.4 13.2q.7 1.1.7 1.3 0 .1-.1.2-.2.1-.3 0t-.4-.6-.3-.7q-2.6-3.8-9.5-14.8.1.1.2 0t.1-.1h.1q.2-.2.2-.4z" }))),
            !p.textFirst && textEl));
    }
}
IconBlind.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBlind;
//# sourceMappingURL=IconBlind.js.map