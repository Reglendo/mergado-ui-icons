import * as React from "react";
class IconGavel extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--gavel ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M39.5 34.3q0 1.2-.8 2l-2.4 2.4q-.9.8-2 .8-1.2 0-2-.8l-8.1-8.1q-.9-.8-.9-2t1-2.2l-5.7-5.7-2.8 2.8q-.4.3-.8.3t-.8-.3l.3.3.3.3.2.2q.1.1.2.3t.2.3.1.4 0 .4q0 .9-.6 1.5l-.4.4q-.3.3-.4.5t-.4.4-.5.3-.5.2-.6.1q-.8 0-1.5-.6l-9.1-9.1q-.6-.6-.6-1.5 0-.3.1-.6t.2-.5.3-.5.4-.4.5-.4.4-.4q.6-.6 1.5-.6h.4q.2 0 .4.1t.3.2.3.2.2.2.3.3.3.3q-.3-.4-.3-.8t.3-.8l7.7-7.7q.4-.3.8-.3t.8.3l-.3-.3-.3-.3-.2-.2q-.1-.1-.2-.3t-.2-.3-.1-.4 0-.4q0-.9.6-1.5l.4-.4q.3-.3.4-.5t.4-.4.5-.3.5-.2.6-.1q.8 0 1.5.6l9.1 9.1q.6.6.6 1.5 0 .3-.1.6t-.2.5-.3.5-.4.4-.5.4-.4.4q-.6.6-1.5.6h-.4q-.2 0-.4-.1t-.3-.2-.3-.2-.2-.2-.3-.3-.3-.3q.3.4.3.8t-.3.8l-2.8 2.8 5.7 5.7q1-1 2.2-1 1.1 0 2 .9l8.1 8.1q.8.8.8 2z" }))),
            !p.textFirst && textEl));
    }
}
IconGavel.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGavel;
//# sourceMappingURL=IconGavel.js.map