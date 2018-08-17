import * as React from "react";
class IconChevronCircleLeft extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--chevron-circle-left ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M23.3 31.1l2.3-2.2q.4-.5.4-1t-.4-1L18.7 20l6.9-6.9q.4-.4.4-1t-.4-1l-2.3-2.2q-.4-.5-1-.5t-1 .5L11.1 19q-.4.4-.4 1t.4 1l10.2 10.1q.4.5 1 .5t1-.5zm14-11.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconChevronCircleLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChevronCircleLeft;
//# sourceMappingURL=IconChevronCircleLeft.js.map