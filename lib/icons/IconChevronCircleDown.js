import * as React from "react";
class IconChevronCircleDown extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--chevron-circle-down ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M21.1 29l10.2-10.1q.4-.5.4-1t-.4-1L29 14.6q-.4-.4-1-.4t-1 .4l-6.9 6.8-6.8-6.8q-.4-.4-1-.4t-1 .4L9 16.9q-.4.4-.4 1t.4 1L19.1 29q.5.4 1 .4t1-.4zm16.2-9q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconChevronCircleDown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChevronCircleDown;
//# sourceMappingURL=IconChevronCircleDown.js.map