import * as React from "react";
class IconSuitcase extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--suitcase ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M14.3 8.6h11.4V5.7H14.3v2.9zm-7.9 0v28.5H5q-2.1 0-3.5-1.4T0 32.1V13.6q0-2.1 1.5-3.6T5 8.6h1.4zm25 0v28.5H8.6V8.6h2.8V5q0-.9.7-1.5t1.5-.6h12.8q.9 0 1.5.6t.7 1.5v3.6h2.8zm8.6 5v18.5q0 2.1-1.5 3.6T35 37.1h-1.4V8.6H35q2.1 0 3.5 1.4t1.5 3.6z" }))),
            !p.textFirst && textEl));
    }
}
IconSuitcase.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSuitcase;
//# sourceMappingURL=IconSuitcase.js.map