import * as React from "react";
class IconRecycle extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--recycle ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M18.7 26.1l-.4 8.2v.5l-9.4-.6q-.8-.1-1.5-.8t-1-1.4q-.3-.6-.4-1.2t.1-1.5.3-1.2.5-1.5.4-1.1q1.7.2 11.4.6zM10 13l4 8.5-3.2-2.1Q9.4 21 8.3 22.6t-1.6 2.8-.9 2.1-.4 1.4l-.1.5-4.3-8q-.4-.5-.4-1.2t.2-1.1l.1-.4q.8-1.4 2.6-4.1l-3.1-2zm27.5 11.6l-4.2 8q-.3.6-.8 1t-1 .5l-.4.1q-1.6.1-4.9.2l.2 3.7-5.1-8.2 4.7-8.1.1 3.9q3.8.3 6.4.1t3.7-.8zM20 3.9q-1.1 1.4-5.9 9.7L7 9.5l-.4-.3 5-7.9Q12 .6 12.9.2t1.8-.2q.5.1 1.1.3t.9.5 1 .7.8.8.8.8.7.8zm14.6 6.9l4.7 8.1q.4.8.3 1.7t-.6 1.6q-.3.5-.7.9t-.9.6-1.1.5-1 .3-1.2.3-1 .3q-.8-1.6-5.9-9.7l7-4.4zm-3.2-5.1l3.2-1.8-4.9 8.3-9.4-.4 3.4-2q-.8-1.9-1.7-3.7t-1.7-2.7-1.4-1.8-1.1-1l-.3-.3h9q.7-.1 1.3.2t.9.7l.2.3q.9 1.4 2.5 4.2z" }))),
            !p.textFirst && textEl));
    }
}
IconRecycle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconRecycle;
//# sourceMappingURL=IconRecycle.js.map