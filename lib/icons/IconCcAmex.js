import * as React from "react";
class IconCcAmex extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--cc-amex ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M2.1 16.3h1.5l-.7-1.9zM13 25.5l1.3-1.4-1.3-1.4h-2.8v.9h2.5v.9h-2.5v1H13zm2.7-1.4l1.8 1.9v-3.8zm5.1-.8q0-.6-.7-.6h-1.5v1.2H20q.8 0 .8-.6zm5-.1q0-.5-.7-.5h-1.4v1.1h1.4q.7 0 .7-.6zM21 15q0-.5-.8-.5h-1.4v1.1h1.4q.8 0 .8-.6zm8 1.3h1.5l-.7-1.9zm-16.8-2.8v4.8h-1.1v-3.7l-1.7 3.7h-1l-1.6-3.7v3.7H4.5L4 17.2H1.7l-.5 1.1H0l2.1-4.8h1.6l2 4.5v-4.5h1.8L9 16.8l1.3-3.3h1.9zm9.8 9.8q0 .3-.1.6t-.3.4-.4.3-.4.2-.6.1-.5 0-.6 0-.5 0v1.6h-2.2L15 24.9l-1.5 1.6H9.1v-4.8h4.5l1.4 1.6 1.4-1.6h3.7q1.9 0 1.9 1.6zm-5.1-6v1h-3.8v-4.8h3.8v1h-2.7v.9h2.6v1h-2.6v.9h2.7zm23.4 9.8v4q0 1-.6 1.7t-1.7.6H2.3q-1 0-1.6-.6T0 31.1V19.2h1.9l.5-1h.9l.5 1h3.8v-.8l.3.8h2l.4-.8v.8h9.4v-1.7h.2q.2 0 .2.2v1.5H25v-.4q.4.2.9.3t.9.2 1.2-.1.9 0l.4-1h1l.4 1h4v-1l.6 1h3.2v-6.6h-3.2v.8l-.4-.8h-3.3v.8l-.4-.8h-4.3q-1.2 0-1.9.4v-.4h-3v.4q-.5-.4-1.3-.4h-11l-.8 1.7-.7-1.7H4.7v.8l-.4-.8H1.4L0 15.7V8.9q0-1 .7-1.7t1.6-.6H38q1 0 1.7.6t.6 1.7v11.9h-2.1q-.9 0-1.4.4v-.4h-3.1q-.9 0-1.3.4v-.4h-5.6v.4q-.5-.4-1.5-.4h-3.7v.4q-.4-.4-1.6-.4h-4l-1 1-.9-1H8v6.6h6l1-1 .9 1h3.7v-1.6h.4q1 0 1.5-.2v1.8h3.1v-1.7h.3v1.7h9.3q1 0 1.5-.4v.4h3q1 0 1.6-.3zM27.1 23q0 .4-.2.7t-.6.6q.4.1.6.4t.1.8v1h-1.1v-.8q0-.6-.2-.8t-.8-.2h-1.2v1.8h-1.2v-4.8h2.7q.9 0 1.4.3t.5 1zm-4.9-8.2q0 .4-.2.8t-.6.5q.5.2.6.4t.2.9v.9H21v-1.2q0-.2-.2-.3t-.3-.2-.5 0h-1.2v1.7h-1.1v-4.8l2.6.1q.9 0 1.4.2t.5 1zm9.3 10.7v1h-3.8v-4.8h3.8v1h-2.7v.9h2.6v.9h-2.6v1zm-7.5-12v4.8h-1.1v-4.8H24zM36.2 25q0 1.5-1.8 1.5h-2.2v-1.1h2.2q.6 0 .6-.4 0-.3-.3-.4t-.8 0-.8-.1-.8-.4-.3-1q0-.6.5-1t1.1-.4h2.3v1h-2.1q-.6 0-.6.4 0 .3.3.4t.8.1.8 0 .7.4.4 1zm4.1-.9v1.7q-.4.7-1.5.7h-2.2v-1.1h2.2q.6 0 .6-.4 0-.2-.2-.3t-.6-.1-.7-.1-.7-.1-.5-.4-.3-.9q0-.6.5-1t1.2-.4h2.2v1h-2q-.7 0-.7.4t.5.4 1.2.1 1 .5zm-2.9-10.5v4.7h-1.6l-2.1-3.6v3.6h-2.3l-.5-1.1h-2.3l-.4 1.1h-1.4q-2.2 0-2.2-2.3 0-2.5 2.3-2.5H28v1.1h-.5q-.4 0-.5-.1t-.4.1-.4.1-.2.2-.2.4-.1.6q0 .7.3 1t.8.4h.5l1.7-3.7h1.7l1.9 4.4v-4.4h1.7l2 3.2v-3.2h1.1z" }))),
            !p.textFirst && textEl));
    }
}
IconCcAmex.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCcAmex;
//# sourceMappingURL=IconCcAmex.js.map