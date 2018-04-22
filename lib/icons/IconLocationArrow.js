import * as React from "react";
import shallowCompare from "shallow-compare";
class IconLocationArrow extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--location-arrow ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M35.8 7.8L21.5 36.4q-.4.7-1.3.7h-.3q-.5-.1-.8-.5t-.3-.9V22.9H5.9q-.5 0-.9-.3t-.5-.8.1-1 .7-.6L33.9 5.9q.2-.2.6-.2.6 0 1 .4.3.4.4.8t-.1.9z" }))),
            !p.textFirst && textEl));
    }
}
IconLocationArrow.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLocationArrow;
//# sourceMappingURL=IconLocationArrow.js.map