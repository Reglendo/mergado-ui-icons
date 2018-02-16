import * as React from "react";
class IconCaretUp extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--caret-up ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.4 27.1q0 .6-.5 1t-1 .5h-20q-.6 0-1-.5t-.4-1 .4-1l10-10q.4-.4 1-.4t1 .4l10 10q.5.5.5 1z" }))),
            !p.textFirst && textEl));
    }
}
IconCaretUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCaretUp;
//# sourceMappingURL=IconCaretUp.js.map