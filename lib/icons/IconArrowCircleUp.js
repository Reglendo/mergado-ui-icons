import * as React from "react";
class IconArrowCircleUp extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--arrow-circle-up ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.7 20q0-.6-.4-1L21.1 8.9q-.4-.4-1-.4t-1 .4L9 19q-.4.4-.4 1t.4 1l2.1 2q.4.4 1 .4t1-.4l4.2-4.2V30q0 .6.4 1t1 .4h2.9q.5 0 1-.4t.4-1V18.8l4.2 4.2q.4.4 1 .4t1-.4l2.1-2q.4-.4.4-1zm5.6 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowCircleUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowCircleUp;
//# sourceMappingURL=IconArrowCircleUp.js.map