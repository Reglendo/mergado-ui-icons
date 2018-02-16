import * as React from "react";
import shallowCompare from "shallow-compare";
class IconStackExchange extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--stack-exchange ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M33.6 28v1.4q0 1.9-1.3 3.3T29.2 34H28l-5.8 6v-6H10.3q-1.8 0-3-1.3T6 29.4V28h27.6zm0-7.3v5.7H6v-5.7h27.6zm0-7.3v5.7H6v-5.7h27.6zm0-3.2v1.5H6v-1.5Q6 8.4 7.3 7t3-1.3h18.9q1.8 0 3.1 1.3t1.3 3.2z" }))),
            !p.textFirst && textEl));
    }
}
IconStackExchange.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStackExchange;
//# sourceMappingURL=IconStackExchange.js.map