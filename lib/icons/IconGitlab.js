import * as React from "react";
import shallowCompare from "shallow-compare";
class IconGitlab extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--gitlab ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M2.3 15.8L20 38.4.6 24.4q-.4-.3-.5-.8t0-1l2.2-6.8zm10.3 0h14.8L20 38.4zM8.2 2.1l4.4 13.7H2.3L6.7 2.1q.2-.5.8-.5t.7.5zm29.5 13.7l2.2 6.8q.2.5 0 1t-.5.8L20 38.4l17.7-22.6zm0 0H27.4l4.4-13.7q.2-.5.7-.5t.8.5z" }))),
            !p.textFirst && textEl));
    }
}
IconGitlab.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGitlab;
//# sourceMappingURL=IconGitlab.js.map