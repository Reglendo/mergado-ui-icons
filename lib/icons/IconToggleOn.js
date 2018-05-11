import * as React from "react";
class IconToggleOn extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--toggle-on ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M0 20q0-2.5 1-4.8t2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8-1 4.8-2.7 4-3.9 2.6-4.9 1H12.4q-2.5 0-4.8-1t-4-2.6-2.6-4T0 20zm27.3 9.9q2 0 3.9-.7t3.2-2.2 2.1-3.1.8-3.9-.8-3.9-2.1-3.1-3.2-2.2-3.9-.7-3.8.7-3.2 2.2-2.1 3.1-.8 3.9.8 3.9 2.1 3.1 3.2 2.2 3.8.7z" }))),
            !p.textFirst && textEl));
    }
}
IconToggleOn.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconToggleOn;
//# sourceMappingURL=IconToggleOn.js.map