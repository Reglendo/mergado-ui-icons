import * as React from "react";
class IconItalic extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--italic ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M8.5 37.1l.4-1.9q.1 0 1.8-.5t2.5-.8q.6-.8.9-2.3 0-.1 1.4-6.4T18 13t1.2-6.6v-.5q-.5-.3-1.2-.4t-1.6-.2-1.3-.1l.5-2.3q.7 0 2.6.1t3.4.2 2.7 0h2.2q1.2 0 2.7-.2t2.2-.1q-.2.8-.5 1.9-.6.3-2.2.7t-2.5.7q-.1.4-.3 1t-.2.9-.1 1-.2.9q-.6 3.3-1.9 9.4t-1.8 7.9q0 .2-.3 1.3t-.4 2-.4 1.9-.1 1.3v.4q.4.1 4.2.7-.1.9-.4 2.2h-1.4q-.7 0-2-.2t-1.9-.2h-4.6q-1.1 0-3.2.2t-2.7.2z" }))),
            !p.textFirst && textEl));
    }
}
IconItalic.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconItalic;
//# sourceMappingURL=IconItalic.js.map