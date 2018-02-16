import * as React from "react";
class IconSpoon extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--spoon ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M27.2 11.8q0 3.2-1.3 5.4t-3.4 3l1.1 18.4q0 .6-.4 1t-1 .4h-4.3q-.6 0-1-.4t-.3-1l1-18.4q-2.1-.8-3.4-3t-1.3-5.4q0-2.9 1-5.6t2.6-4.4T20.1 0t3.5 1.8 2.7 4.4.9 5.6z" }))),
            !p.textFirst && textEl));
    }
}
IconSpoon.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSpoon;
//# sourceMappingURL=IconSpoon.js.map