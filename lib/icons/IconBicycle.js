import * as React from "react";
class IconBicycle extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--bicycle ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M13.3 24.5H7.8q-.7 0-1-.6t.2-1.2l3.2-4.4q-1.1-.5-2.4-.5-2.3 0-3.9 1.6t-1.7 4 1.7 3.9T7.8 29q2.1 0 3.6-1.3t1.9-3.2zm-3.2-2.3h3.2q-.3-1.4-1.3-2.6zm8.4 0l5-6.7h-8.4l-1.7 2.3q1.8 1.8 2.2 4.4h2.9zm19.6 1.2q0-2.3-1.6-4t-4-1.6q-1.1 0-2.1.4l3 4.5q.3.4.2.9t-.5.7q-.2.2-.6.2-.6 0-.9-.5l-3.1-4.6q-1.6 1.7-1.6 4t1.6 3.9 4 1.7 4-1.7 1.6-3.9zm2.2 0q0 3.2-2.3 5.5t-5.5 2.3-5.5-2.3-2.3-5.5q0-1.7.6-3.2t2-2.7l-1.2-1.7-6.2 8.2q-.3.5-.9.5h-3.4q-.4 2.9-2.6 4.8t-5.2 1.9q-3.2 0-5.5-2.3T0 23.4t2.3-5.6 5.5-2.3q2 0 3.8 1l2.4-3.2h-3.9q-.5 0-.8-.4t-.3-.7.3-.8.8-.4h6.7v2.3h7.6L22.9 11H19q-.4 0-.7-.3t-.4-.8.4-.8.7-.3h4.5q.6 0 1 .5l4.6 7q1.6-.8 3.4-.8 3.2 0 5.5 2.3t2.3 5.6z" }))),
            !p.textFirst && textEl));
    }
}
IconBicycle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBicycle;
//# sourceMappingURL=IconBicycle.js.map