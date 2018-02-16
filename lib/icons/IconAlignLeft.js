import * as React from "react";
class IconAlignLeft extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--align-left ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M40 30v2.9q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm-8.6-8.6v2.9q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-2.9q0-.5.4-1t1-.4H30q.6 0 1 .4t.4 1zm5.7-8.5v2.8q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-2.8q0-.6.4-1t1-.5h34.3q.6 0 1 .5t.4 1zm-8.5-8.6v2.8q0 .6-.5 1t-1 .5H1.4q-.6 0-1-.5t-.4-1V4.3q0-.6.4-1t1-.4h25.7q.6 0 1 .4t.5 1z" }))),
            !p.textFirst && textEl));
    }
}
IconAlignLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAlignLeft;
//# sourceMappingURL=IconAlignLeft.js.map