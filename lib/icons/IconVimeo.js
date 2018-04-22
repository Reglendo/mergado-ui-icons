import * as React from "react";
import shallowCompare from "shallow-compare";
class IconVimeo extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--vimeo ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M38.1 11.6q-.2 5.2-7.4 14.5-7.4 9.6-12.5 9.6-3.2 0-5.4-5.9-.9-3.5-2.9-10.7-1.6-5.9-3.5-5.9-.4 0-2.9 1.7l-1.7-2.2q.6-.4 2.4-2.1T7.1 8q3.5-3.1 5.4-3.2 2.1-.2 3.4 1.2t1.8 4.5q1 6.4 1.5 8.4 1.2 5.5 2.7 5.5 1.1 0 3.4-3.6t2.5-5.5q.3-3.1-2.5-3.1-1.2 0-2.7.6Q25.3 4 32.9 4.3q5.6.2 5.2 7.3z" }))),
            !p.textFirst && textEl));
    }
}
IconVimeo.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconVimeo;
//# sourceMappingURL=IconVimeo.js.map