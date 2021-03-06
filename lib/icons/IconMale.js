import * as React from "react";
class IconMale extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--male ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.4 15.7V25q0 .9-.7 1.5t-1.5.6-1.5-.6-.6-1.5v-7.9h-1.5v20.4q0 1-.7 1.8t-1.8.7-1.7-.7-.8-1.8V27.1h-1.4v10.4q0 1-.7 1.8t-1.8.7-1.7-.7-.8-1.8V17.1h-1.4V25q0 .9-.6 1.5t-1.6.6-1.5-.6-.6-1.5v-9.3q0-1.8 1.2-3t3.1-1.3h14.3q1.8 0 3 1.3t1.3 3zm-6.5-10q0 2.1-1.4 3.6t-3.6 1.4-3.5-1.4-1.5-3.6 1.5-3.5T19.9.7t3.6 1.5 1.4 3.5z" }))),
            !p.textFirst && textEl));
    }
}
IconMale.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMale;
//# sourceMappingURL=IconMale.js.map