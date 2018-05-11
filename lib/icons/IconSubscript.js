import * as React from "react";
class IconSubscript extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--subscript ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M23 30.6v3.7h-5.5l-3.6-5.6-.5-1q-.2-.2-.2-.4h-.1l-.2.4q-.2.5-.6 1l-3.4 5.6H3.1v-3.7H6l4.4-6.5L6.2 18h-3v-3.8h6.1l3.1 5.1q.1.1.6 1l.2.4h.1q0-.2.2-.4l.6-1 3.1-5.1h5.7V18h-2.8L16 23.9l4.6 6.7H23zm14.3 4.8V40H25.8l-.1-.6v-1q0-1.5.5-2.6t1.5-2 1.9-1.4 1.8-1.2 1.5-1.2.6-1.5q0-.8-.7-1.4t-1.6-.5q-1.1 0-2.1.9-.3.2-.8.8l-2.4-2.1q.6-.8 1.4-1.4 1.8-1.5 4.2-1.5 2.5 0 4 1.4t1.5 3.5q0 1.5-.8 2.6t-1.8 2-2.2 1.3-2 1.5-.9 1.6h5.2v-1.8h2.8z" }))),
            !p.textFirst && textEl));
    }
}
IconSubscript.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSubscript;
//# sourceMappingURL=IconSubscript.js.map