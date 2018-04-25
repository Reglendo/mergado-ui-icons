import * as React from "react";
class IconOpencart extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--opencart ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M26.7 31.6q0 1.2-.9 2.1t-2 .8-2-.8-.9-2.1.9-2 2-.8 2 .8.9 2zm-13.1 0q0 1.2-.9 2.1t-2 .8-2.1-.8-.8-2.1.8-2 2.1-.8 2 .8.9 2zM0 5.5q1 1 1.9 1.8t2.2 1.5 2.3 1.1 2.9.8 3.5.5 4.4.3 5.3.2 6.6 0q2.4 0 4.2.1t3.2.3 2.2.5 1.2.7.4.9-.3 1.1-1 1.3-1.6 1.6-2 1.9-2.4 2.1q-3.3 2.7-5 4.3.5-.9 1.3-1.9t1.7-1.9 1.6-1.7 1.5-1.6.9-1.4.2-1.2-.8-1-2-.7-3.6-.4-5.3-.1q-2.9 0-5.5-.1t-4.5-.4-3.5-.8-2.8-.9-2.2-1-1.6-1.2-1.2-1.3-.9-1.2-.7-1.2-.6-1z" }))),
            !p.textFirst && textEl));
    }
}
IconOpencart.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconOpencart;
//# sourceMappingURL=IconOpencart.js.map