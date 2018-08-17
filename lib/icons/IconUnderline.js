import * as React from "react";
class IconUnderline extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--underline ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M4.1 5q-.9-.1-1-.1l-.1-2h.9q1.3 0 2.5.1 2.9.1 3.7.1h3.7l3.3-.1q1.3 0 1.9-.1v.3l.1 1.5v.2q-1.4.2-2.8.2t-1.8.5q-.3.3-.3 3v1.3l.1 5.1.3 6.2q.1 2.8 1.1 4.5.8 1.4 2.2 2.1 1.9 1 3.9 1 2.3 0 4.3-.6 1.2-.4 2.2-1.1 1.1-.8 1.4-1.4.8-1.3 1.2-2.6.5-1.6.5-5.1 0-1.8-.1-2.9t-.2-2.7-.3-3.6l-.1-1.3q-.1-1.5-.6-1.9-.7-.8-1.7-.8h-2.5V2.9h1.9l4.6.2q1.7 0 4.4-.2h.4q.1.9.1 1.1 0 .2-.1.7-1 .3-1.9.3-1.6.3-1.7.4-.4.3-.4.9 0 .2.1.6t0 .7q.2.4.5 8.9.1 4.3-.4 6.7-.3 1.7-.9 2.8-.8 1.4-2.5 2.7-1.6 1.3-4 2-2.5.7-5.7.7-3.8 0-6.4-1-2.6-1-4-2.7-1.3-1.7-1.8-4.4-.4-1.8-.4-5.3v-7.4q0-4.2-.3-4.7Q6.8 5 4.1 5zm33.2 31.4V35q0-.3-.2-.5t-.5-.2H3.7q-.3 0-.5.2T3 35v1.4q0 .3.2.5t.5.2h32.9q.3 0 .5-.2t.2-.5z" }))),
            !p.textFirst && textEl));
    }
}
IconUnderline.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconUnderline;
//# sourceMappingURL=IconUnderline.js.map