import * as React from "react";
import shallowCompare from "shallow-compare";
class IconTwitch extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--twitch ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M20 9.7v9.7h-3.2V9.7H20zm8.9 0v9.7h-3.3V9.7h3.3zm0 17l5.6-5.7V3.2H7.9v23.4h7.3v4.9l4.8-4.9h8.9zM37.8 0v22.6l-9.7 9.7h-7.3L16 37.1h-4.9v-4.8H2.2V6.5L4.7 0h33.1z" }))),
            !p.textFirst && textEl));
    }
}
IconTwitch.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTwitch;
//# sourceMappingURL=IconTwitch.js.map