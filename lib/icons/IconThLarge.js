import * as React from "react";
import shallowCompare from "shallow-compare";
class IconThLarge extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--th-large ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M18.6 22.9v8.5q0 1.2-.8 2t-2 .9H4.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H4.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2zm20 17.2v8.5q0 1.2-.8 2t-2 .9H24.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H24.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2z" }))),
            !p.textFirst && textEl));
    }
}
IconThLarge.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconThLarge;
//# sourceMappingURL=IconThLarge.js.map