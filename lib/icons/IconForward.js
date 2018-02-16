import * as React from "react";
class IconForward extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--forward ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M4 36.9q-.4.4-.7.2t-.3-.7V3.6q0-.6.3-.7t.7.2L19.9 19l.2.4V3.6q0-.6.3-.7t.7.2L37 19q.4.4.4 1t-.4 1L21.1 36.9q-.4.4-.7.2t-.3-.7V20.6l-.2.4z" }))),
            !p.textFirst && textEl));
    }
}
IconForward.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconForward;
//# sourceMappingURL=IconForward.js.map