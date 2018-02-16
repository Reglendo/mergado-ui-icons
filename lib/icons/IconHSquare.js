import * as React from "react";
import shallowCompare from "shallow-compare";
class IconHSquare extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--h-square ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.6 30V10q0-.6-.5-1t-1-.4h-2.8q-.6 0-1 .4t-.4 1v7.1H14.4V10q0-.6-.4-1t-1-.4h-2.9q-.5 0-1 .4t-.4 1v20q0 .6.4 1t1 .4H13q.6 0 1-.4t.4-1v-7.1h11.5V30q0 .6.4 1t1 .4h2.8q.6 0 1-.4t.5-1zm5.7-20.7v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconHSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHSquare;
//# sourceMappingURL=IconHSquare.js.map