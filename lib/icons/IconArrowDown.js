import * as React from "react";
class IconArrowDown extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrow-down ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M37.5 18.6q0 1.2-.9 2L22.1 35.1q-.9.9-2 .9-1.2 0-2-.9L3.5 20.6q-.8-.8-.8-2t.8-2.1l1.7-1.6q.9-.9 2-.9 1.2 0 2 .9l6.6 6.5V5.7q0-1.1.8-2t2-.8h2.9q1.2 0 2 .8t.9 2v15.7l6.5-6.5q.8-.9 2-.9t2.1.9l1.6 1.6q.9.9.9 2.1z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowDown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowDown;
//# sourceMappingURL=IconArrowDown.js.map