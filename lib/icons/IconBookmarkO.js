import * as React from "react";
import shallowCompare from "shallow-compare";
class IconBookmarkO extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--bookmark-o ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.2 5.7H8.4v27.7l11.4-10.9 2 1.9 9.4 9V5.7zm.3-2.8q.5 0 1 .2.7.2 1.1.9t.5 1.4v28.7q0 .8-.5 1.4t-1.1.9q-.5.2-1 .2-1.1 0-1.9-.7l-9.8-9.5-9.9 9.5q-.8.7-1.8.7-.5 0-1-.2-.7-.3-1.2-.9t-.4-1.4V5.4q0-.8.4-1.4t1.2-.9q.5-.2 1-.2h23.4z" }))),
            !p.textFirst && textEl));
    }
}
IconBookmarkO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBookmarkO;
//# sourceMappingURL=IconBookmarkO.js.map