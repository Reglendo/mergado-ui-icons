import * as React from "react";
class IconFlagCheckered extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--flag-checkered ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M18.1 22.3v-4.2q-3.9.3-8.3 2.5v4.1q4.4-2.1 8.3-2.4zm0-9.1V8.9q-3.7.1-8.3 2.7v4.1q4.6-2.4 8.3-2.5zm18.1 10v-4q-5.1 2.6-8.3 1.6v-4.9q-.5-.1-.9-.3-.1-.1-.7-.4t-.7-.4-.7-.3-.8-.3-.7-.3-.8-.3-.7-.2-.9-.1-.9-.1-.9-.1q-.5 0-1.1.1V18h.4q2.3 0 4.2.7t4.3 1.8q.4.2.9.3v4.1q.9.3 2 .3 2.6 0 6.3-2zm0-9.3V9.8q-3.6 2-6.6 2-1 0-1.7-.2v4.3q3.2.9 8.3-2zM7 6.1q0 .7-.4 1.4t-1 1V36q0 .3-.2.5t-.5.2H3.5q-.3 0-.5-.2t-.2-.5V8.5q-.6-.4-1-1t-.4-1.4q0-1.2.8-2t2-.8 2 .8.8 2zm32 1.4v16.6q0 .8-.7 1.2-.3.1-.4.2-4.8 2.5-8 2.5-2 0-3.5-.7l-.6-.3q-1.4-.8-2.2-1.1t-1.9-.6-2.5-.3q-2.2 0-5.1.9t-5 2.3q-.3.2-.7.2-.4 0-.7-.2Q7 27.8 7 27V10.8q0-.8.6-1.2l1.8-.9q1-.5 2.4-1.1t3.4-1.1 3.3-.4q2.5 0 4.6.6t4.5 1.9q.9.4 2 .4 2.6 0 6.7-2.4l.7-.4q.7-.3 1.4.1.6.4.6 1.2z" }))),
            !p.textFirst && textEl));
    }
}
IconFlagCheckered.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFlagCheckered;
//# sourceMappingURL=IconFlagCheckered.js.map