import * as React from "react";
class IconChevronCircleRight extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--chevron-circle-right ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M19 31.1L29.1 21q.5-.4.5-1t-.5-1L19 8.9q-.4-.5-1-.5t-1 .5l-2.3 2.2q-.4.5-.4 1t.4 1l6.9 6.9-6.9 6.9q-.4.4-.4 1t.4 1l2.3 2.2q.4.5 1 .5t1-.5zM37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconChevronCircleRight.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChevronCircleRight;
//# sourceMappingURL=IconChevronCircleRight.js.map