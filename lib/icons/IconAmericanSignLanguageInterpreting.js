import * as React from "react";
class IconAmericanSignLanguageInterpreting extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--american-sign-language-interpreting ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M18.1 21.1q-1.1 0-1.5-.9-.3-.6-.8-1t-1.2-.3q-1 0-1.6.6t-.7 1.6q0 1 .7 1.6l.1.1q.6.6 1.5.6.6 0 1.2-.4t.8-.9q.4-.9 1.5-1zm9.9-2.2q0-1-.6-1.6l-.2-.1q-.6-.6-1.4-.6-.7 0-1.2.4t-.9.9q-.4.9-1.4 1 1 0 1.4.9.3.6.9 1t1.2.3q.9 0 1.6-.6t.6-1.6zM20.6 15q-.3.6-1 .8t-1.3 0q-1.1-.6-2.3-.6-.9 0-1.8.3h.4q1.6 0 2.9.9t2.1 2.3q.3.7.1 1.3t-.9 1q-.3.1-.7.1.4 0 .7.2.6.3.9.9t-.1 1.3q-.7 1.5-2.1 2.3t-2.9.9h-.9l-5.1-.5-4.2 2.1q-.2.1-.5.1-.7 0-1-.6L.1 22.2q-.2-.4 0-.8t.5-.7l3.6-2.1 2.6-4.7q.3-2.7 1.6-5.1t3.4-4.1q.6-.4 1.3-.4t1.1.6.4 1.3-.6 1.1q-1.3 1-2.1 2.2 2.2-1.4 4.7-1.7.7-.1 1.2.3t.7 1.1q.1.7-.4 1.3t-1.1.6q-1.5.2-2.8 1 .8-.2 1.8-.2 2 0 3.8.9.6.3.8.9t0 1.3zm16.8-2.8l2.8 5.6q.2.4.1.8t-.5.7l-3.7 2.1-2.6 4.7q-.3 2.7-1.6 5.1t-3.4 4.1q-.5.4-1.1.4-.8 0-1.3-.6-.4-.6-.3-1.3t.6-1.1q1.2-1 2-2.2-2.1 1.4-4.7 1.7 0 .1-.2.1-.6 0-1.1-.5t-.5-1q-.1-.7.3-1.3t1.1-.6q1.5-.2 2.8-1-.8.2-1.7.2-2 0-3.8-.9-.7-.3-.9-.9t.1-1.3q.3-.6.9-.9t1.3.1q1.1.6 2.4.6.9 0 1.7-.3h-.3q-1.6 0-3-.9t-2.1-2.3q-.3-.7 0-1.3t.8-1q.3-.1.7-.1-.4 0-.7-.2-.6-.3-.8-.9t0-1.3q.7-1.5 2.1-2.3t3-.9h.8l5.1.5 4.2-2.1q.3-.1.5-.1.7 0 1 .6z" }))),
            !p.textFirst && textEl));
    }
}
IconAmericanSignLanguageInterpreting.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAmericanSignLanguageInterpreting;
//# sourceMappingURL=IconAmericanSignLanguageInterpreting.js.map