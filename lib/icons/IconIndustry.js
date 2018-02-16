import * as React from "react";
class IconIndustry extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--industry ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M10 0q.6 0 1 .4t.4 1v19.9l12-9.6q.4-.3.9-.3.6 0 1 .5t.4 1v8.4l12-9.6q.4-.3.9-.3t1 .5.4 1v25.7q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V1.4q0-.6.4-1t1-.4H10z" }))),
            !p.textFirst && textEl));
    }
}
IconIndustry.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconIndustry;
//# sourceMappingURL=IconIndustry.js.map