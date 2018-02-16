import * as React from "react";
import shallowCompare from "shallow-compare";
class IconPlay extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--play ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.4 20.7L5.8 37.2q-.6.3-.9 0t-.4-.8V3.6q0-.6.4-.8t.9 0l29.6 16.5q.5.3.5.7t-.5.7z" }))),
            !p.textFirst && textEl));
    }
}
IconPlay.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPlay;
//# sourceMappingURL=IconPlay.js.map