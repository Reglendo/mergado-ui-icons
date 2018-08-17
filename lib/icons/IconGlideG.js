import * as React from "react";
class IconGlideG extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--glide-g ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M19.6 6.8v-.9q0-.4-.2-.6t-.5-.5-.8-.2q-.9 0-1.8.5-2.3 1.3-3.5 4.3t-1.2 6q0 1 .2 1.9t.6 1.8 1.1 1.4 1.8.5h.9q.2 0 .3-.1t.4-.1.1-.4q.4-1.7 1.1-5.2t1.1-5.1q.4-2.1.4-3.3zm16.8 14.7q0 .1-.1.3t-.4.1h-.1q-.5-.1-1.4-.3t-1.6-.2-1.4-.1q-3.7 0-7.8 2-.4.2-.5.6l-.6 2.4q-.4 1.6-.5 2.2-.5 2.1-1.5 4T18 36.2 14.5 39t-4.1 1q-3 0-4.8-1.9t-1.8-4.9q0-1.1.5-2.6T5.7 28t2.1-1.1q.9 0 2.7.7t1.9 1.4l-.4.3q-.4.3-.9.6t-1 1-.9 1.4-.3 1.7q0 .7.3 1.1t1.1.5q1 0 1.9-.7t1.5-1.8 1.1-2.3.7-2.4.4-2v-.2q0-.1-.1-.1t-.2 0H15q-5.1 0-7.8-2.7t-2.8-7.8q0-2.4.7-4.9T7.3 6t3.5-3.8 4.5-2q1.2-.2 2.4-.2Q26 0 26 8.1q0 2.1-.8 6.1t-1 4.7h.1q2.2-1.2 4.1-1.9t3.7-.7q.5 0 1.2.3.4.1 1.8 2.3t1.3 2.6z" }))),
            !p.textFirst && textEl));
    }
}
IconGlideG.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGlideG;
//# sourceMappingURL=IconGlideG.js.map