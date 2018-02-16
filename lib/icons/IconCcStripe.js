import * as React from "react";
import shallowCompare from "shallow-compare";
class IconCcStripe extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--cc-stripe ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28 20.1q0 1.2-.4 1.9-.3.6-.9.6-.4 0-.7-.2v-3.9q.5-.5 1-.5 1 0 1 2.1zm7.6-.6h-1.9q.1-1.7 1-1.7t.9 1.7zM8.3 21.9q0-1.1-.5-1.6T6 19.2q-.6-.2-.9-.4t-.3-.4q0-.5.7-.5 1 0 2.1.6l.3-1.9Q6.8 16 5.3 16q-1.3 0-2.1.7-.9.6-.9 1.9 0 1 .6 1.5t1.8 1q.6.3.9.5t.3.5q0 .5-.9.5-.5 0-1.2-.2t-1.2-.5l-.4 1.9q1.3.8 3 .8 1.4 0 2.2-.7.9-.7.9-2zm5.2-3.8l.3-2h-1.7v-2.3l-2.2.4-.3 1.9-.8.2-.3 1.8h1.1v3.8q0 1.5.7 2.1.7.6 2 .6.5 0 1.4-.2v-2.1q-.6.1-.8.1-.8 0-.8-.9v-3.4h1.4zm5.5.4v-2.4q-.2-.1-.5-.1-.5 0-.9.3t-.6.8l-.2-1h-2.3v8.3h2.6V19q.5-.5 1.5-.5h.4zm.7 5.9h2.6v-8.3h-2.6v8.3zM30.6 20q0-2.1-.8-3.1-.7-.9-2-.9-1.1 0-2 1l-.2-.9h-2.3v11.3L26 27v-2.6q.6.2 1.2.2 1.4 0 2.3-1 1.1-1.2 1.1-3.6zm-8.2-6.1q0-.5-.4-.9t-1-.4-1 .4-.4.9.4 1 1 .4 1-.4.4-1zm15.7 6.3q0-2-.8-3.1-.9-1.1-2.6-1.1-1.6 0-2.6 1.1t-1 3.2q0 2.2 1.1 3.3 1 1 2.8 1 1.8 0 2.8-.7l-.2-1.9q-1 .6-2.3.6-.7 0-1.1-.3-.4-.4-.5-1.2h4.4v-.9zm2.2-11.4v22.4q0 .9-.6 1.6t-1.6.6H2.2q-.9 0-1.5-.6T0 31.2V8.8q0-.9.7-1.6t1.5-.6h35.9q.9 0 1.6.6t.6 1.6z" }))),
            !p.textFirst && textEl));
    }
}
IconCcStripe.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCcStripe;
//# sourceMappingURL=IconCcStripe.js.map