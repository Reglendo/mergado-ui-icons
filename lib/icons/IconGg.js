import * as React from "react";
class IconGg extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--gg ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M14.3 18.1l7.4 7.5-7.4 7.4L1.2 20 14.3 7l3.2 3.2-1.8 1.9-1.4-1.4L5 20l9.3 9.3 3.7-3.7-5.6-5.6zM25.5 7l13 13-13 13-3.3-3.2 1.9-1.9 1.4 1.4 9.3-9.3-9.3-9.3-3.8 3.7 5.6 5.6-1.8 1.9-7.5-7.5z" }))),
            !p.textFirst && textEl));
    }
}
IconGg.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGg;
//# sourceMappingURL=IconGg.js.map