import * as React from "react";
class IconMagnet extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--magnet ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.3 18.6v2.8q0 4.5-2.2 8.1T29 35.1t-8.9 2-8.8-2-6.1-5.6T3 21.4v-2.8q0-.6.4-1t1-.5H13q.6 0 1 .5t.4 1v2.8q0 1.2.6 2t1.1 1.3 1.6.7 1.5.3.9 0 1 0 1.5-.3 1.5-.7 1.2-1.3.6-2v-2.8q0-.6.4-1t1-.5h8.6q.5 0 1 .5t.4 1zM14.4 4.3v8.6q0 .5-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4H13q.6 0 1 .4t.4 1zm22.9 0v8.6q0 .5-.4 1t-1 .4h-8.6q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4h8.6q.5 0 1 .4t.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconMagnet.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMagnet;
//# sourceMappingURL=IconMagnet.js.map