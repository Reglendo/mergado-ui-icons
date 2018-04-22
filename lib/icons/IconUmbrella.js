import * as React from "react";
import shallowCompare from "shallow-compare";
class IconUmbrella extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--umbrella ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M21.5 18.5v12.9q0 2.3-1.7 4t-4 1.7-4-1.7-1.7-4q0-.6.4-1t1-.4 1 .4.4 1q0 1.1.9 2t2 .9 2-.9.8-2V18.5q.8-.3 1.5-.3t1.4.3zm17.1.6q0 .3-.2.5t-.5.2q-.2 0-.5-.2-1.1-1.1-2.1-1.6t-2.2-.5q-1.6 0-2.9.8t-2.3 2.2q-.1.2-.4.6t-.3.6q-.3.4-.6.4-.4 0-.7-.4l-.3-.6q-.2-.4-.4-.6-1-1.3-2.3-2.2t-2.8-.8-2.9.8-2.3 2.2q-.1.2-.4.6t-.3.6q-.2.3-.6.3-.4 0-.6-.3-.1-.2-.4-.6t-.4-.6q-.9-1.3-2.3-2.2t-2.8-.8q-1.3 0-2.3.5t-2.1 1.6q-.2.2-.5.2t-.5-.2-.2-.5v-.2q1-4.1 3.9-7.1T12 7.2t8.1-1.5q3.1 0 6.1.9t5.5 2.5 4.3 4.2 2.6 5.6v.2zM21.5 2.9V5h-2.9V2.9q0-.6.5-1t1-.5 1 .5.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconUmbrella.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconUmbrella;
//# sourceMappingURL=IconUmbrella.js.map