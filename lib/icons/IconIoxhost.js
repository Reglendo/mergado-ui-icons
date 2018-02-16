import * as React from "react";
import shallowCompare from "shallow-compare";
class IconIoxhost extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--ioxhost ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.4 18.8q0 .6-.5 1.1t-1.2.5H13.1q-.7 0-1.2-.5t-.5-1.1.5-1.2 1.2-.5h13.6q.7 0 1.2.5t.5 1.2zm4.2 0q0-1.7-.5-3.3H13q-.7 0-1.1-.5t-.5-1.2q0-.7.5-1.2t1.1-.5h17.7Q29 9.4 26.1 7.7t-6.2-1.6q-3.4 0-6.4 1.7t-4.6 4.6-1.7 6.4q0 1.6.5 3.3h19q.7 0 1.2.4t.5 1.2q0 .7-.5 1.2t-1.2.5H9.1q1.7 2.8 4.6 4.4t6.2 1.6q2.6 0 4.9-1t4-2.7 2.7-4 1-4.9zm7.2-5q0 .7-.5 1.2t-1.2.5h-2.6q.4 1.6.4 3.3 0 3.2-1.3 6.2t-3.4 5.1-5.1 3.4-6.2 1.3q-4.8 0-8.7-2.6t-5.9-6.8H1.7q-.7 0-1.2-.5T0 23.7q0-.7.5-1.2t1.2-.4h2.5q-.3-1.7-.3-3.3 0-3.3 1.3-6.2t3.4-5.1T13.7 4t6.2-1.2q4.7 0 8.7 2.5t5.8 6.8h3.7q.7 0 1.2.5t.4 1.2z" }))),
            !p.textFirst && textEl));
    }
}
IconIoxhost.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconIoxhost;
//# sourceMappingURL=IconIoxhost.js.map