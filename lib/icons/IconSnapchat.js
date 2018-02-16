import * as React from "react";
class IconSnapchat extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--snapchat ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.6 25.6q0-.5-.5-.6-1.5-.3-2.7-1.3t-1.8-2.4q-.1-.4-.1-.6 0-.3.4-.5t1-.4.9-.5.5-.8q0-.4-.4-.7t-.9-.3q-.3 0-.7.2t-.7.2q-.1 0-.3-.1.1-2.1.1-2.5 0-1.8-.3-2.6-.8-1.7-2.3-2.7t-3.4-.9q-4.5 0-6.2 3.6-.4.8-.4 2.6 0 .4.2 2.5-.1.1-.4.1-.2 0-.7-.2t-.6-.2q-.5 0-.9.3t-.4.7q0 .5.4.8t1 .5 1 .4.4.5q0 .2-.2.6-1.4 3.1-4.4 3.7-.5.1-.5.6 0 1.1 3.1 1.5 0 .2.1.6t.3.7.5.2q.3 0 .8-.1t.9-.1q.8 0 1.5.4t1.2.7 1.3.7 1.7.3q1 0 1.8-.3t1.3-.7 1.2-.7 1.5-.4q.3 0 .8.1t.9.1q.3 0 .5-.2t.3-.7.1-.6q3-.4 3-1.5zm5.7-5.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconSnapchat.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSnapchat;
//# sourceMappingURL=IconSnapchat.js.map