import * as React from "react";
import shallowCompare from "shallow-compare";
class IconStethoscope extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--stethoscope ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M33.1 15.7q0-.6-.5-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.5-1zm2.8 0q0 1.4-.8 2.5t-2 1.6v8.8q0 3.5-3 6t-7 2.5-7.1-2.5-2.9-6v-3q-3.7-.4-6.1-2.8t-2.5-5.7V5.7q0-.6.4-1t1-.4h.4q.4-.6 1-1t1.5-.4q1.2 0 2 .8t.8 2-.8 2-2 .9q-.8 0-1.4-.4v8.9q0 2.4 2.1 4.1t5 1.7 5-1.7 2.1-4.1V8.2q-.6.4-1.4.4-1.2 0-2-.9t-.8-2 .8-2 2-.8q.8 0 1.5.4t1 1h.4q.6 0 1 .4t.4 1v11.4q0 3.3-2.5 5.7t-6.1 2.8v3q0 2.3 2.1 4t5.1 1.7 5-1.7 2.1-4v-8.8q-1.3-.5-2.1-1.6t-.7-2.5q0-1.8 1.2-3t3-1.3 3.1 1.3 1.2 3z" }))),
            !p.textFirst && textEl));
    }
}
IconStethoscope.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStethoscope;
//# sourceMappingURL=IconStethoscope.js.map